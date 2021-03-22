class QuestionsController < ApplicationController

  def create
    question = Question.new(question_params)
    question.quiz_id = @quiz.id
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

end
