class SessionsController < ApplicationController
  skip_before_action :current_user, only:[:create]
  before_action :load_user, only: [:create]

  def create
    if @user && @user.authenticate(session_params[:password])
      login!
      render status: :ok, json: { 
        notice: "Welcome back, #{@user.first_name}",
       }
    else 
      render status: :unauthorized, json: {
        notice: 'Incorrect credentials, try again.'
      }
    end
  end

  def destroy
    logout!
    render json: { status: :ok }
  end

  private
    def session_params
      params.require(:login).permit(:email, :password)
    end

    def load_user
      @user = User.find_by(email: session_params[:email])
      rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
    end

end
