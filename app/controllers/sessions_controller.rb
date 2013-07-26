class SessionsController < ApplicationController

  def create
    @user = User.find_by_name_and_password_digest(params[:user][:name],
            params[:user][:password_digest])
    if @user
      login @user
      redirect_to user_photos_url(@user)
    else
      set_flash "Error logging in."
      redirect_to new_session_url
    end
  end

  def new
    @user = User.new
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
