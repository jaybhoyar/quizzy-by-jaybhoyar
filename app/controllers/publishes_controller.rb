class PublishesController < ApplicationController
  before_action :load_quiz, only: %i[create show]

  def create
    if @quiz
      @quiz.generate_slug
      @quiz.save
      render status: :ok, json: { notice: "Quiz published successfully" }
    else
      render status: :unprocessable_entity, json: { error: "Something went wrong" }
    end
  end

  private 
    def load_quiz
      @quiz = Quiz.find_by(id:params[:quiz_id])
      puts @quiz.to_s
    end
  
end
