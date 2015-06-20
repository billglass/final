class Clin < ActiveRecord::Base
	belongs_to :user
	belongs_to :card
	belongs_to :game
end
