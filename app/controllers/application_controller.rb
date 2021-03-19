class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :current_user
  
  include Authenticator
end
