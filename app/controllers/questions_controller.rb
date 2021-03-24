class QuestionsController < ApplicationController
  before_action :load_quiz, only: %i[create update show]
  before_action :load_question, only: %i[update show]

  def create
    question = @quiz.questions.new(question_params)
    if question.save
      render status: :ok, json: { notice: "Question created successfully!" }
    else
      render status: :unprocessable_entity, json: { error: question.errors.full_messages.to_sentence }
    end
  end

  def show
    if @question
      render status: :ok, json: { question: @question, options: @question.options }
    else
      render status: :not_found, json: { notice: "Question not found" }
    end
  end

  def update
    if @question.blank?
      render status: :not_found, json: { notice: "Question not found" }
    elsif  @questio.update(question_params)
      render status: :ok, json: { notice: "Question updated successfully!" }
    else
      render status: :unprocessable_entity, json: { error: @question.errors.full_messages.to_sentence }
    end
  end

  private
    def question_params
      params.require(:question).permit(:title, options_attributes: [:value, :is_correct])
    end

    def load_quiz
      @quiz = Quiz.find_by(id: params[:quiz_id])
    end

    def load_question
      @question = Question.find_by(id: params[:id])
    end

end
