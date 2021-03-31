class AttemptsController < ApplicationController
  before_action :find_quiz_with_slug, only: %i[new show update create]
  before_action :load_questions_with_options, only: %i[show new]
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
    attempt = Attempt.find_by(quiz_id: @quiz.id, user_id: @user.id)
    if attempt.nil?
        attempt = Attempt.new(quiz_id: @quiz.id, user_id: @user.id)
        attempt.save
    end

    if @user.present? && attempt.present? 
      render status: :ok, json: { notice: "User created successfully!",attempt: attempt, 
         user: @user.attributes.except("password_digest"), }
    else
      render status: :unprocessable_entity, json: { error: "Something Went Wrong" }
    end
  end

  def update
    if @attempt.present?
      @attempt.update(attempt_params)
      @attempt.submitted = true
    if   @attempt.save
      render status: :ok, json: { notice: "Quiz submitted successfully"}
    else
      render status: :unprocessable_entity, json: { error: @attempt.errors.full_messages.to_sentence }
    end
  end
  end

  private

    def find_quiz_with_slug
      @quiz = Quiz.find_by(slug: params[:slug])
      rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end

    def load_attempt
      @attempt = Attempt.find_by(id: params[:id])
    end

   
    
    def load_questions_with_options
      questions = @quiz.questions.includes(:options)
      @quiz_questions = questions.map { |question| { question: question, options: question.options} }
    end

    def attempt_params
      params.require(:attempt).permit(attempt_answers_attributes: [:value, :question_id, :attempt_id])
    end

    
    
end
