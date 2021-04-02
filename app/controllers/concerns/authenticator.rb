module Authenticator
  extend ActiveSupport::Concern
  
  def login!
    session[:user_id] = @user.id
  end

  def logged_in?
    !session[:user_id].nil?
  end

  def current_user
    if logged_in?
      @current_user ||= User.find_by(id: session[:user_id]) 
    end
  end

  def logout!
    session.delete(:user_id)
    @current_user = nil
  end

  def get_attempts
    @attempts = Attempt.all
    @attempts.each do |attempt|
      quiz = attempt.quiz
      user = attempt.user
    end
    puts @attempts.to_a
  end
end
