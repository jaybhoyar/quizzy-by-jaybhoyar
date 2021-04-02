class PrepareReportJob < ApplicationJob
  include Authenticator
  queue_as :default

  def perform
    get_attempts 
    book = Spreadsheet::Workbook.new
    sheet = book.create_worksheet(name: 'Attempts')
    sheet.row(0).push('Quiz Name', 'User Name', 'User Email', 'Correct Answers', 'Incorrect Answers') # Number of arguments will be number of columns

    # We can create many rows same as the mentioned above.
    @attempts.each_with_index do |item, index|
      sheet.row(index+1).push(item.quiz.name, item.user.first_name, item.user.email, 
        item.correct_answers_count, item.incorrect_answers_count)
    end
    book.write 'public/attempts_report.xls'
  end
    
end
