json.array!(@cards) do |card|
  json.extract! card, :id, :name, :scoring, :rebounds, :assists, :steals, :blocks
  json.url card_url(card, format: :json)
end
