class AttemptController < ApplicationController
  before_action :find_quiz_with_slug, only: %i[show]
  before_action :load_questions_with_options, only: %i[show]
  before_action :create_user, only: %i[create]

  def show
    render status: :ok, json: { quiz: @quiz, questions: @quiz_questions }
  end

  def create
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

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end
    
    def create_user
      @user = User.new(user_params)
      @user.password = @user.password_confirmation = "defaultpassword"
      if @user.save
        render status: :ok, json: { notice: "User created successfully!", user: @user }
      else
        render status: :unprocessable_entity, json: { error: @user.errors.full_messages.to_sentence }
      end
    end
    
end
