class ReportsController < ApplicationController
  def index
    attempts = Attempt.all
    render status: :ok, json: {attempts: attempts}
  end
end
