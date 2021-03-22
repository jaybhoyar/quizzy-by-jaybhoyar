class Quiz < ApplicationRecord
  belongs_to :user
  has_many :questions

  validates :name, presence: true, length: { maximum: 250 }
  validates :user_id, presence: true
end
