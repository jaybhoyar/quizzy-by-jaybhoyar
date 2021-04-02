class PrepareReportJob < ApplicationJob
  include Authenticator
  queue_as :default

  def perform
    get_attempts 
    book = Spreadsheet::Workbook.new
    sheet = book.create_worksheet(name: 'Attempts')
    sheet.row(0).push('Quiz Name', 'User Name', 'User Email', 'Correct Answers', 'Incorrect Answers')
    @attempts.each_with_index do |attempt, index|
      sheet.row(index+1).push(attempt.quiz.name, attempt.user.first_name, attempt.user.email, 
        attempt.correct_answers_count, attempt.incorrect_answers_count)
    end
    book.write 'public/attempts_report.xls'
  end
    
end
