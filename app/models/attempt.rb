class Attempt < ApplicationRecord
  belongs_to :user
  belongs_to :quiz

  has_many :attempt_answers

  validates :user_id, presence: true
end
