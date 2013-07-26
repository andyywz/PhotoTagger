class User < ActiveRecord::Base
  attr_accessible :name, :password_digest, :session_token

  has_many :photos
  has_many :friendships, foreign_key: :user_id
  has_many :friends, through: :friendships, source: :friend

  validates :name, uniqueness: true
end
