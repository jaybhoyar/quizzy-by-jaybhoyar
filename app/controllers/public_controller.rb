class PublishesController < ApplicationController
  before_action :load_quiz, only: %i[create]

  def create
    if @quiz
    @quiz.slug = generate_slug
      render status: :ok, json: { slug: @quiz.slug }
    else
      render status: :unprocessable_entity, json: { error: "Something went wrong" }
    end
  end

  private 
  def load_quiz
    @quiz = Quiz.find_by(id: params[:id])
  end

end