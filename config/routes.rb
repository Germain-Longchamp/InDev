Rails.application.routes.draw do
  # Route Home
  root to: 'home#index'

  # Routes Clients
  resources :clients

  # Routes Companies
  resources :companies
end
