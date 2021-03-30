class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.password = @user.password_confirmation = "defaultpassword"
    if @user.save
      render status: :ok, json: { notice: "User created successfully!", user: @user }
    else
      render status: :unprocessable_entity, json: { error: @user.errors.full_messages.to_sentence }
    end
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end
end
