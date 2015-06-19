class Cardling < ActiveRecord::Base
	has_many :users
	has_many :games
	has_many :cards
end
