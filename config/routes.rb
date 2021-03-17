Rails.application.routes.draw do
  resource :sessions, only: %i[create destroy]
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
