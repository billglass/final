class CreateCardlings < ActiveRecord::Migration
  def change
    create_table :cardlings do |t|
      t.string :name
      t.integer :scoring
      t.integer :rebounds
      t.integer :assists
      t.integer :steals
      t.integer :blocks

      t.timestamps null: false
    end
  end
end
