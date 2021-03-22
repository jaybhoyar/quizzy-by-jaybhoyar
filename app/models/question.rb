class Question < ApplicationRecord
  belongs_to :quiz

  validates :tile, presence: true, length: { maximum: 250 }
  validates :quiz_id, presence: true

end
