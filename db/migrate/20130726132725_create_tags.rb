class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :photo_id
      t.integer :user_id
      t.decimal :x_coord
      t.decimal :y_coord

      t.timestamps
    end
  end
end
