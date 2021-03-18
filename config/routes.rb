Rails.application.routes.draw do
  resource :sessions, only: %i[create destroy]
  resources :quizzes, only: %i[create index show]

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
