Rails.application.routes.draw do
  get 'users/index'
  get 'users/show'
  get 'users/new'
  get 'users/edit'
  get 'users/create'
  get 'users/update'
  get 'users/destroy'
  devise_for :users
  # Route Home
  root to: 'home#index'

  # Routes Clients
  resources :clients

  # Routes Companies
  resources :companies
end
