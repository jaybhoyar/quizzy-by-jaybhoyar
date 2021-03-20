Rails.application.routes.draw do
  resource :sessions, only: %i[create destroy]
  resources :quizzes, except: %i[new, edit]

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
