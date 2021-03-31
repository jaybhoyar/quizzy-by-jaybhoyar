class AttemptsController < ApplicationController
  before_action :find_quiz_with_slug, only: %i[new show update create]
  before_action :load_questions_with_options, only: %i[show new]
 
  # def show
  #   render status: :ok, json: { quiz: @quiz, questions: @quiz_questions }
  # end

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
    @attempt = Attempt.find_by(quiz_id: @quiz.id, user_id: @user.id)
    if @attempt.nil?
        @attempt = Attempt.new(quiz_id: @quiz.id, user_id: @user.id)
        @attempt.save
    end

    if @user.present? && @attempt.present? 
      render status: :ok, json: { notice: "User created successfully!",attempt: @attempt, 
         user: @user.attributes.except("password_digest"), }
    else
      render status: :unprocessable_entity, json: { error: "Something Went Wrong" }
    end
  end

  # def update
  #   if @attempt.present? && !@attempt.submitted
  #     @attempt.submitted = true
  #     if @attempt.save
  #       @attempt.update(attempt_params)
  #       render status: :ok, json: { notice: "Quiz submitted successfully", attempt_answers: @attempt.attempt_answers}
  #     else
  #       render status: :unprocessable_entity, json: { error: @attempt.errors.full_messages.to_sentence }
  #     end
  #   else
  #     render status: :unprocessable_entity, json: { error: @attempt.errors.full_messages.to_sentence }
  #   end
  # end

  private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end

    def find_quiz_with_slug
      @quiz = Quiz.find_by(slug: params[:slug])
      rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
    end
    
    def load_questions_with_options
      questions = @quiz.questions.includes(:options)
      @quiz_questions = questions.map { |question| { question: question, options: question.options } }
    end

    def attempt_params
      params.require(:attempt).permit(attempt_answers_attributes: [:value, :question_id, :attempt_id])
    end

    
    
end
