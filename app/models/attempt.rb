class Attempt < ApplicationRecord
  belongs_to :user
  belongs_to :quiz

  has_many :attempt_answers
  accepts_nested_attributes_for :attempt_answers, allow_destroy: true
  
  validates :user_id, presence: true
  validates :quiz_id, presence: true

end
