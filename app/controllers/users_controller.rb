class UsersController < ApplicationController
  def create
  	@user = User.new(params[:id])
  	if @user.save
  		redirect_to root_path, notice: "New Account Created!"
  	else
  		flash[:alert] = "Invalid Username/Password"
  		render :new
  	end
  end

  def new
  	@user = User.new
  end

  def index
  	@users = User.all
  end

  def destroy
	end
end

	private

	def set_user
		@user = User.find(params[:id])
	end
