class QuizzesController < ApplicationController
  before_action :load_quiz, only: %i[show update destroy]
  
  def index
    quizzes = @current_user.quizzes.all
    render status: :ok, json: {quizzes: quizzes}
  end

  def create
    quiz = @current_user.quizzes.new(quiz_params)
    if quiz.save
      render status: :ok, json: { notice: "Quiz created successfully!" }
    else
      render status: :unprocessable_entity, json: { error: quiz.errors.full_messages.to_sentence }
    end
  end

  def show
    if @quiz
      render status: :ok, json: { quiz: @quiz }
    else
      render status: :not_found, json: { notice: "Quiz not found" }
    end
  end


  def update
    if @quiz.blank?
      render status: :not_found, json: { notice: "Quiz not found" }
    elsif @quiz.update(quiz_params)
      render status: :ok, json: { notice: "Quiz updated successfully!" }
    else
      render status: :unprocessable_entity, json: { error: @quiz.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @quiz.blank?
      render status: :not_found, json: { notice: "Quiz not found" }
    elsif @quiz.destroy
      render status: :ok, json: { notice: "Quiz deleted successfully!" }
    else
      render status: :unprocessable_entity, json: { error: @quiz.errors.full_messages.to_sentence }
    end
  end


  private
    def quiz_params
      params.require(:quiz).permit(:name)
    end

    def load_quiz
      @quiz = Quiz.find_by(id: params[:id])
    end


end
