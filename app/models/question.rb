class Question < ApplicationRecord
  belongs_to :quiz
  has_many :options, dependent: :destroy 

  accepts_nested_attributes_for :options, allow_destroy: true

  validates :title, presence: true, length: { maximum: 250 }
  validates :options, presence: true
  validates :quiz_id, presence: true
end
