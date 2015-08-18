class ApplicationController < ActionController::Base
	before_action :authenticate_user!
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  AWS::S3::Base.establish_connection!(
 :access_key_id   => ENV['AKIAISEDNIQADVTG24AA'],
 :secret_access_key => ENV['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']
)
end
