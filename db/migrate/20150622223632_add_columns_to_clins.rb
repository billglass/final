class AddColumnsToClins < ActiveRecord::Migration
  def change
    add_reference :clins, :game, index: true, foreign_key: true
    add_reference :clins, :card, index: true, foreign_key: true
  end
end
