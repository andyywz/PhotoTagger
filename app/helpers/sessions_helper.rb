module SessionsHelper

  def login(user)
    session_token = SecureRandom::urlsafe_base64
    session[:session_token] = session_token
    user.update_attributes(session_token: session_token)
    self.current_user = user
  end

  def logout
    session[:session_token] = nil
    current_user.update_attributes(session_token: nil)
    self.current_user = nil
  end

  def current_user
    if session[:session_token]
      @current_user = User.find_by_session_token(session[:session_token])
    end
  end

  def current_user=(val)
    @current_user = val
  end

  def authenticate
    unless !!current_user
      set_flash "Not authorized."
    end
  end


end
