class CreateClins < ActiveRecord::Migration
  def change
    create_table :clins do |t|
      t.string :name
      t.integer :scoring
      t.integer :rebounds
      t.integer :assists
      t.integer :steals
      t.integer :blocks
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
