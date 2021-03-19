class SessionsController < ApplicationController
  skip_before_action :current_user, only:[:create]

  def create
    @user = User.find_by(email: session_params[:email])
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

end
