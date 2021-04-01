class AddCorrectAndIncorrectCountToAttempts < ActiveRecord::Migration[6.1]
  def change
    add_column :attempts, :correct_answers_count, :integer
    add_column :attempts, :incorrect_answers_count, :integer
  end
end
