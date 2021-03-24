Rails.application.routes.draw do
  resource :sessions, only: %i[create destroy]
  resources :quizzes, except: %i[new, edit] do
    resources :questions, only: %i[create update show]
  end
  
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
