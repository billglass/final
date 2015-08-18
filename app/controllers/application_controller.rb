class ApplicationController < ActionController::Base
	before_action :authenticate_user!
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  AWS::S3::Base.establish_connection!(
 :access_key_id   => ENV['S3_KEY'],
 :secret_access_key => ENV['S3_SECRET']
)
end
