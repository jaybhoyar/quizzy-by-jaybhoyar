class PublicController < ApplicationController
  before_action :find_quiz_with_slug, only: %i[verify_slug show]
  before_action :load_questions_with_options, only: %i[show]

  def verify_slug
    redirect_to "#{request.base_url}/public/#{@quiz.slug}/attempts/new"
  end

  def show
    render status: :ok, json: { quiz: @quiz, questions: @quiz_questions }
  end


  private
    def find_quiz_with_slug
      @quiz = Quiz.find_by(slug: params[:slug])
      if @quiz.blank?
        render status: :not_found, json: { notice: "Quiz does not exists" }
      end
    end

    def load_questions_with_options
      questions = @quiz.questions.includes(:options)
      @quiz_questions = questions.map { |question| { question: question, 
        options: question.options :except=>  [:is_correct] } }
    end
end
