class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: session_params[:email])
    if @user && @user.authenticate(session_params[:password])
      session[:user_id] = @user.id
      render status: :ok, json: { 
        notice: "Welcome back, #{@user.first_name}",
       }
    else 
      render status: :unauthorized, json: {
        notice: 'Incorrect credentials, try again.'
      }
    end
  end

  private

    def session_params
      params.require(:login).permit(:email, :password)
    end

end
