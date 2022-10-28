Rails.application.routes.draw do
  # Route Home
  root to: 'home#index'

  # Routes Users
  devise_for :users, :path => 'account'
  resources :users

  # Routes Clients
  resources :clients

  # Routes Companies
  resources :companies
end
