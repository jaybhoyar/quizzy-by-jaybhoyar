class Quiz < ApplicationRecord
  default_scope { order("created_at DESC") }
  before_validation :generate_slug

  belongs_to :user
  has_many :questions, dependent: :destroy

  validates :name, presence: true, length: { maximum: 250 }
  validates :slug, uniqueness: true
  validates :user_id, presence: true

  def generate_slug
    slug = self.name.to_s.parameterize
    counter = 1
    if Quiz.exists?(slug: slug)
      loop do 
        new_slug = "#{slug}-#{counter}"
        break self.slug = new_slug unless Quiz.exists?(slug: new_slug) 
        counter += 1
      end
    else 
      self.slug = slug 
    end    
  end
   
end
