class AddSlugToQuiz < ActiveRecord::Migration[6.1]
  def change
    add_column :quizzes, :slug, :string, null: false, default: ""
    #Ex:- :default =>''
  end
end
