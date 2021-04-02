class PrepareReportJob < ApplicationJob
  queue_as :default

  def perform
    puts "Report is being prepared"
  end

  private
    
end
