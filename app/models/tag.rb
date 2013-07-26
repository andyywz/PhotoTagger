class Tag < ActiveRecord::Base
  attr_accessible :photo_id, :user_id, :x_coord, :y_coord

  belongs_to :photo
end
