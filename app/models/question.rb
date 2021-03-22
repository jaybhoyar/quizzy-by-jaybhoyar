class Question < ApplicationRecord
  belongs_to :quiz

  validates :title, presence: true, length: { maximum: 250 }
  validates :quiz_id, presence: true

end
