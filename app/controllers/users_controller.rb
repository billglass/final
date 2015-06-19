class UsersController < ApplicationController
  def create
  	@user = User.create
  	@user.save
  end

  def new
  	@user = User.new
  	@user.save
  end

  def index
  end

  def destroy
  end
end
