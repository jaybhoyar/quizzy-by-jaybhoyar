class AttemptController < ApplicationController
  before_action :find_quiz_with_slug, only: %i[show]
  before_action :load_questions_with_options, only: %i[show]

  def show
    render status: :ok, json: { quiz: @quiz, questions: @quiz_questions }
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

end
