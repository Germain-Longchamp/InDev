Rails.application.routes.draw do
  # Route to Home
  root to: 'home#index'

  # Routes Clients
  resources :clients
end
