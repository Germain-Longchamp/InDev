Rails.application.routes.draw do
  resources :designs
  # Route Home
  root to: 'home#index'

  # Route Board
  get 'board', to: 'board#index'

  # Routes Users
  devise_for :users, :path => 'account'
  resources :users

  # Routes Clients
  resources :clients

  # Routes Companies
  resources :companies
end
