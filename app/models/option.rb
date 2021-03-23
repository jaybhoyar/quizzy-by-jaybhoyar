class Option < ApplicationRecord
  belongs_to :question

  validates :value, presence: true, length: { maximum: 150 }
  validates :is_correct, presence: true
end
