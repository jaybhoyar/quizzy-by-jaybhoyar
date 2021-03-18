class QuizzesController < ApplicationController
  include SessionsHelper

  def create
    quiz = Quiz.new(quiz_params)
    puts "#{current_user}, ---- #{@current_user}"
    quiz.user_id = show_current
    if quiz.save
      render status: :ok, json: {notice: "Quiz created successfully!", quiz}
    else
      render status: :unprocessable_entity, json: {errors: quiz.errors.full_messages.to_sentence}
    end
  end

  private
    def quiz_params
      params.require(:quiz).permit(:name)
    end



end
