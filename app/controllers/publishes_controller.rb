class PublishesController < ApplicationController
  before_action :load_quiz, only: %i[create]

  def create
      @quiz.generate_slug
    if @quiz.save
      render status: :ok, json: { notice: "Quiz published successfully" }
    else
      render status: :unprocessable_entity, json: { error: "Something went wrong" }
    end
  end

  private 
    def load_quiz
      @quiz = Quiz.find_by(id:params[:quiz_id])
      if @quiz.blank?
        render status: :not_found, json: { notice: "Quiz not found" }
      end
    end
  
end
