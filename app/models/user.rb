class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze
  enum role: [:standard, :administrator]

  validates :email, presence: true,
                     format: { with: VALID_EMAIL_REGEX },
                     uniqueness: { case_sensitive: false }
                     
  validates :first_name, presence: true, length: { maximum: 50 }
  validates :last_name, presence: true, length: { maximum: 50 }
  validates :password, presence: true, confirmation: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true, on: :create

  before_save { self.email = email.downcase }
  has_secure_password

end