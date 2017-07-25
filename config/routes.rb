Rails.application.routes.draw do
  root 'home#index'

  post 'do_contact', to: "home#do_contact"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
