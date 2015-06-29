class IndexController < ApplicationController
  
  def index
    @card = Card.all
  end

  def home

  	@cards = Card.all
    @clins = Clin.all
  end

  def about
  end

  def contact
  end
end
