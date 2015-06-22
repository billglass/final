class AddAttachmentImageToClins < ActiveRecord::Migration
  def change
    add_attachment :clins, :image
  end
end
