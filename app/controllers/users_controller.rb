class UsersController < ApplicationController

  def create
    
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end
end
