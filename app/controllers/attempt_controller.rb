class AttemptController < ApplicationController
  before_action :find_quiz_with_slug, only: %i[show]
  before_action :load_questions_with_options, only: %i[show]
  before_action :create_user, only: %i[create]
  before_action :load_attempt, only: %i[update]

  def show
    render status: :ok, json: { quiz: @quiz, questions: @quiz_questions }
  end

  def create
    if @user.save 
        attempt = Attempt.new(quiz_id: quiz_params[:id], user_id: @user.id)
      if attempt.save
        render status: :ok, json: { notice: "User created successfully!", user: @user, attempt: attempt}
      else
        render status: :unprocessable_entity, json: { error: attempt.errors.full_messages.to_sentence }
      end
    else 
      render status: :unprocessable_entity, json: { error: @user.errors.full_messages.to_sentence }
    end
  end

  def update
    if @attempt.present?
      @attempt.submitted = true
      @attempt.save
      @attempt.update(attempt_params)
      calculate_result(@attempt)
      render status: :ok, json: { notice: "Quiz submitted successfully"}
    else
      render status: :unprocessable_entity, json: { error: @question.errors.full_messages.to_sentence }
    end
  end

  private
    def find_quiz_with_slug
      @quiz = Quiz.find_by(slug: params[:id])
      rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
    end

    def load_questions_with_options
      questions = @quiz.questions.includes(:options)
      @quiz_questions = questions.map { |question| { question: question, options: question.options } }
    end

    def quiz_params
      params.require(:quiz).permit(:id)
    end

    def load_attempt
      @attempt_to_update = Attempt.find_by(id: params[:id])
    end

    def attempt_params
      params.require(:attempt).permit(attempt_answers_attributes: [:value, :question_id, :attempt_id])
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end
    
    def create_user
      @user = User.new(user_params)
      @user.password = @user.password_confirmation = "defaultpassword"
    end
    
end
