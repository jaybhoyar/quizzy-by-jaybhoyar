class QuestionsController < ApplicationController
  before_action :load_quiz, only: %i[create update show destroy]
  before_action :load_question, only: %i[update show destroy]
  before_action :load_all_quiz_questions, only: %i[destroy]

  def create
    question = @quiz.questions.new(question_params)
    if question.save
      render status: :ok, json: { notice: "Question created successfully!" }
    else
      render status: :unprocessable_entity, json: { error: question.errors.full_messages.to_sentence }
    end
  end

  def show
    render status: :ok, json: { question: @question, options: @question.options }
  end

  def update
    if  @question.update(question_params)
      render status: :ok, json: { notice: "Question updated successfully!" }
    else
      render status: :unprocessable_entity, json: { error: @question.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @question.destroy
      if @quiz_questions.empty?
        @quiz.slug = nil
        @quiz.save
      end
      render status: :ok, json: { notice: "Question deleted successfully!" }
    else
      render status: :unprocessable_entity, json: { error: @question.errors.full_messages.to_sentence }
    end
  end

  private
    def question_params
      params.require(:question).permit(:title, options_attributes: [:id, :value, :is_correct, :_destroy])
    end

    def load_quiz
      @quiz = Quiz.find_by(id: params[:quiz_id])
      if @quiz.blank?
        render status: :not_found, json: { notice: "Quiz not found" }
      end
    end

    def load_all_quiz_questions
      @quiz_questions = @quiz.questions
    end

    def load_question
      @question = Question.find_by(id: params[:id])
      if @question.blank?
        render status: :not_found, json: { notice: "Question not found" }
      end
    end

end
