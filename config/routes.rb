Phototagger::Application.routes.draw do

  root :to => "sessions#new"

  resource :session, only:[:new, :create, :destroy]
  resources :users do
    resources :photos, only: [:index]
  end

  resources :photos, only: [:index] do
    resources :tags, except: :show
  end
  resource :photo, only: [:new, :create]
  resources :photo, only: [:edit, :update, :show, :destroy]
end
