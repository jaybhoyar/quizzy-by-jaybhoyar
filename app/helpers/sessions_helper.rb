module SessionsHelper

  def log_in!(user_id) 
    session[:user_id] = user_id
  end

  def logout!
    session.clear
  end
end
