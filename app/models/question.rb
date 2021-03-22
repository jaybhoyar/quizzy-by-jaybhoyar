class Question < ApplicationRecord
  belongs_to :quiz
  has_many :options, dependent: :destroy 

  validates :title, presence: true, length: { maximum: 250 }
  validates :quiz_id, presence: true
  validates :options, presence: true
  accepts_nested_attributes_for :options
end
