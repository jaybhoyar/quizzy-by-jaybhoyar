class QuizzesController < ApplicationController
  
  def create
    quiz = Quiz.new(quiz_params)
    quiz.user_id = @current_user.id
    if quiz.save
      render status: :ok, json: {notice: "Quiz created successfully!"}
    else
      render status: :unprocessable_entity, json: {errors: quiz.errors.full_messages.to_sentence}
    end
  end

  private
    def quiz_params
      params.require(:quiz).permit(:name)
    end


end
