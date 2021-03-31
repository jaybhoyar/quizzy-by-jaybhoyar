class Question < ApplicationRecord
  belongs_to :quiz
  has_many :options, dependent: :destroy 
  has_many :attempt_answers
  accepts_nested_attributes_for :options, allow_destroy: true
  
  validates_length_of :options, minimum: 2, maximum: 4 
  validates :title, presence: true, length: { maximum: 250 }
  validates :options, presence: true
  validates :quiz_id, presence: true
end
