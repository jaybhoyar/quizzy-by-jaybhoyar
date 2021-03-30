class Attempt < ApplicationRecord
  belongs_to :user
  belongs_to :quiz

  validates :submitted, presence: true, inclusion: [true, false]
  validates :user_id, presence: true
end
