Rails.application.routes.draw do
  resource :sessions, only: %i[create destroy]
  resources :quizzes, except: %i[new, edit] do
   
    resources :questions, except: %i[new, edit]
  end
  resource :publishes, only: %i[create]
  resource :public, only: %i[show]

  get '/public/:slug' => "public#verify_slug"
  
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
