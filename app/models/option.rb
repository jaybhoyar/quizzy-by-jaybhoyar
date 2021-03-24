class Option < ApplicationRecord
  belongs_to :question

  validates :value, presence: true, length: { maximum: 150 }
end
