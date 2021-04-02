Rails.application.routes.draw do
  resource :sessions, only: %i[create destroy]
  resources :quizzes, except: %i[new, edit] do
    resources :questions, except: %i[new, edit]
  end

  resource :publishes, only: %i[create]
  resources :public, param: :slug, only: %i[show] do
    resources :attempts, only: %i[show create update new]
  end

   resources :reports, only: %i[index create new]
  
  
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
