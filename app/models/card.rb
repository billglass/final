class Card < ActiveRecord::Base

	has_attached_file :image, :styles =>
	{ :medium => "300x300>>", :thumb => "100x100>" },
	:default_url => "/images/players/"
	validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

	has_many :clins
end
