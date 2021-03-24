class QuestionsController < ApplicationController
  before_action :load_quiz, only: %i[create]

  def create
    question = @quiz.questions.new(question_params)
    if question.save
      render status: :ok, json: { notice: "Question created successfully!" }
    else
      render status: :unprocessable_entity, json: { error: question.errors.full_messages.to_sentence }
    end
  end

  private
    def question_params
      params.require(:question).permit(:title, options_attributes: [:value, :is_correct])
    end

    def load_quiz
      @quiz = Quiz.find(params[:quiz_id])
    end

end
