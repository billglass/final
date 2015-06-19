class GamesController < ApplicationController
  def index
  	@cardlings = Card.all(params[:id])
  end

  def update
  end

  def show
  end

  def new
  	@game = Game.new
  end

  def destroy
  end

  def create
  	
  	@game =  Game.create(params[:id])
  	#@game = Game.new(params[:game])

  	#Look up Cardlings w/ Users ID = (@cardlings = Card.find(:user_id))?
  	#Then find the card that's associated w/ Card_ID
  	#Params[:id] => created 5 cardlings => creates association w/ game, user, card => game view
  	@cardlings = User.find(params[:id])
  	if @cardlings.save
  		redirect_to @cards
  	else 
  		render "new"
  	end
  end
end


