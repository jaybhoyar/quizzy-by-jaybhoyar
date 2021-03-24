Rails.application.routes.draw do
  resource :sessions, only: %i[create destroy]
  resources :quizzes, except: %i[new, edit] do
    resources :questions, except: %i[new, edit]
  end
  
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
