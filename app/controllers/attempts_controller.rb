class AttemptsController < ApplicationController
  before_action :find_quiz_with_slug, only: %i[new show update create]
  before_action :load_questions_with_options, only: %i[show new update]
  before_action :load_attempt, only: %i[update show]
 
  def show
    attempt_answers = @attempt.attempt_answers
    render status: :ok, json: { quiz: @quiz, questions: @quiz_questions, attempted_answers: attempt_answers}
  end

  def new
    render status: :ok, json: { quiz: @quiz, questions: @quiz_questions }
  end

  def create
    @user = User.find_by(email: user_params[:email])
    if @user.nil?
      @user = User.new(user_params)
      @user.password = @user.password_confirmation = "defaultpassword"
      @user.save
    end
    attempt = @user.attempts.find_by(quiz_id: @quiz.id)
    if attempt.nil?
      attempt = @user.attempts(quiz_id: @quiz.id)
      attempt.save
    end

    if @user.present? && attempt.present? 
      render status: :ok, json: { notice: "User created successfully!", attempt: attempt, 
        user: @user.attributes.except("password_digest")}
    else
      render status: :unprocessable_entity, json: { error: "Something Went Wrong" }
    end
  end

  def update
    if @attempt.present?
        @attempt.update(attempt_params)
        @attempt.submitted = true
        counts = calculate_correct_answer
        @attempt.correct_answers_count = counts[0]
        @attempt.incorrect_answers_count = counts[1]
      if @attempt.save
        render status: :ok, json: { notice: "Quiz submitted successfully", attempt: @attempt}
      else
        render status: :unprocessable_entity, json: { error: @attempt.errors.full_messages.to_sentence }
      end
    end
  end

  private

    def find_quiz_with_slug
      @quiz = Quiz.find_by(slug: params[:public_slug])
      rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end

    def load_attempt
      @attempt = Attempt.find_by(id: params[:id])
      if @attempt.blank?
        render status: :not_found, json: { notice: "Attempt not found" }
      end
    end

    def load_questions_with_options
      questions = @quiz.questions.includes(:options)
      @quiz_questions = questions.map { |question| { question: question, options: question.options} }
    end

    def attempt_params
      params.require(:attempt).permit(attempt_answers_attributes: [:value, :question_id, :attempt_id])
    end

    def calculate_correct_answer
      attempt_answers = @attempt.attempt_answers
      questions = @quiz_questions

      obj = Hash.new()
      attempt_answers.each{ |x| obj[x.question_id] = x.value }
        result = questions.map do |q| 
          { 
            question_id: q[:question].id,
            userOption: obj[q[:question].id],
            correct_option: q[:options].select{ |option| option[:is_correct] }[0].value
          }
        end
      correct_count = result.select{ |r| r[:userOption] == r[:correct_option] }
      incorrect_count = result.select{ |r| r[:userOption] != r[:correct_option] }
      return [correct_count.length, incorrect_count.length]
    end
    
end
