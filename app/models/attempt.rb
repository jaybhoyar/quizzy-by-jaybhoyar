class Attempt < ApplicationRecord
  belongs_to :user
  belongs_to :quiz

  validates :user_id, presence: true
end
