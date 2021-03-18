class Quiz < ApplicationRecord
  belongs_to :user

  validates :name, presence: true, length: { maximum: 250 }, uniqueness: true
  validates :user_id, presence: true
end
