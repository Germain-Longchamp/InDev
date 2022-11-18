Rails.application.routes.draw do
  # Route Home
  root to: 'home#index'

  # Route Board
  get 'board', to: 'board#index'

  # Route Settings
  get 'settings', to: 'settings#index'

  # Routes Users
  devise_for :users, :path => 'account', :controllers => { :registrations => :registrations }
  resources :users

  # Routes Clients
  resources :clients

  # Routes Design
  resources :designs

  # Routes Companies
  resources :companies
end
