class Photo < ActiveRecord::Base
  attr_accessible :photopath, :user_id

  belongs_to :user
  has_many :tags
  has_many :tagged_users, class_name: "Tag", foreign_key: :user_id

end
