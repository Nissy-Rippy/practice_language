json.extract! user, :id, :introduction, :age, :image_id, :created_at, :updated_at
json.url user_url(user, format: :json)
