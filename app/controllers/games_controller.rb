class GamesController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    @clins = Clin.all

  end

  def update
  end

  def show
    @game = Game.find(params[:id])
  end

  def new
    @clins = Clin.all
  	@game = Game.new
  end

  def destroy
  end

  def create
    @game = Game.create(user: current_user)

    params[:cards].each do |card_id|
      @clin = Clin.new
      @clin.game = @game
      # Lookup the card associated with
      @card = Card.find(card_id)
      @clin.card = @card
      @clin.user = current_user
      @clin.save
    end

    if @game.save
      redirect_to game_path(@game), render: "New Game Created!"
    else 
      redirect_to root_path
    end

    #if user is nil => CPU
    # hold status, find clins associated w/ me from active game
    # Figure out how turns work
    

      # create cardling model (mocks card, has user.id)
      # tweak code so you can associate each cardling w/ game & user
      # how to retrieve data that has been generated
      # get ID numbers out of array, grab data from each ID number, then you can clone
      
      # Create a cardling based on that card
      # Assign to the user/game
    end
  	#Look up Cardlings w/ Users ID = (@cardlings = Card.find(:user_id))?
  	#Then find the card that's associated w/ Card_ID
  	#Params[:id] => created 5 cardlings => creates association w/ game, user, card => game view
end





