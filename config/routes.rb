Rails.application.routes.draw do
  get 'events/update'
  get 'events/destroy'
  get 'events/create'
  devise_for :users
  resources :users
  resources :pictures
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
