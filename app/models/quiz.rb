class Quiz < ApplicationRecord
  default_scope { order("created_at DESC") }

  belongs_to :user
  has_many :questions, dependent: :destroy

  validates :name, presence: true, length: { maximum: 250 }
  validates :slug, presence: true, uniqueness: true
  validates :user_id, presence: true

  private
    def generate_slug
      self.slug = self.name.parameterize
    end
end
