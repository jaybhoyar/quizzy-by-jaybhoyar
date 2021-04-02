class ReportsController < ApplicationController

  def index
    attempts = Attempt.all
    @attempts_with_user_and_quiz = attempts.map { | attempt |  { attempt: attempt, user: load_user(attempt[:user_id]), 
      quiz: load_quiz(attempt[:quiz_id]) } }

    render status: :ok, json: { attempts: @attempts_with_user_and_quiz  }
  end

  def create
    # PrepareReportJob.perform_async("")
    # generate_report
  end

  private 
    def load_quiz(quiz_id)
      quiz = Quiz.find_by(id: quiz_id)
    end

    def load_user(user_id)
      user = User.find_by(id: user_id)
    end  
    
    def generate_report
    end
end
