class PublicsController < ApplicationController
  before_action :find_quiz_with_slug, only: %i[show]
 
  def show
    redirect_to "#{request.base_url}/public/#{@quiz.slug}/attempt/new"
  end

  private
    def find_quiz_with_slug
      @quiz = Quiz.find_by(slug: params[:slug])
      if @quiz.blank?
        render status: :not_found, json: { notice: "Quiz does not exists" }
      end
    end
end
