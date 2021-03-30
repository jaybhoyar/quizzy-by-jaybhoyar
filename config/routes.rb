Rails.application.routes.draw do
  resource :sessions, only: %i[create destroy]
  resources :quizzes, except: %i[new, edit] do
    resources :questions, except: %i[new, edit]
  end
  resources :users, only: %i[create]
  resource :publishes, only: %i[create]
  resources :attempt, only: %i[show create]

  get '/public/:slug' => "public#verify_slug"
  
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
