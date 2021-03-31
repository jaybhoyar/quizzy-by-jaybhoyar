class AttemptAnswer < ApplicationRecord
  belongs_to :attempt
  belongs_to :question

  validates :value, presence: true
  validates :question_id, presence: true
  validates :attempt_id, presence: true
end
