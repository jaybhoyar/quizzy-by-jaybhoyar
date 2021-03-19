Rails.application.routes.draw do
  resource :sessions, only: %i[create destroy]
  resources :quizzes

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
