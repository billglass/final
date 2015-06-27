class GamesController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  # before_action :set_clin, only: [:show]

  def index
    @clins = Clin.all
  end

  def update
    @game = Game.find(params[:id])
    respond_to do |format|
      @game.update(params.require(:clin).permit(:name))
        format.html { redirect_to(@card.project, :notice => 'Game was successfully updated.') }
        format.json { respond_with_bip(@game) }
    end
  end

  def show
    @game = Game.find(params[:id])
    @card = Card.all.sample(5)
    @clin = Clin.all

    # params[:clins].each do |clin_id|
    # end
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

    end


    # def set_clin
    #   params.require(:clin).permit(:image, :name, :scoring, :rebounds, :assists, :steals, :blocks)
    # end
end





