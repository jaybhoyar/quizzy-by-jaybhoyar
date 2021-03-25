class Quiz < ApplicationRecord
  default_scope { order("created_at DESC") }

  belongs_to :user
  has_many :questions, dependent: :destroy

  validates :name, presence: true, length: { maximum: 250 }
  validates :user_id, presence: true
end
