Rails.application.routes.draw do
  root 'home#index'

  get 'download_cv', to: "home#download_cv"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
