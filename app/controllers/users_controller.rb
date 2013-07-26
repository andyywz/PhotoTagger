class UsersController < ApplicationController
  def create
    @user = User.new(params[:user])

    if @user.save
      login @user
      redirect_to user_photos_url(@user)
    else
      set_flash "Could not create new user."
      redirect_to new_user_url
    end
  end

  def new
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
    respond_to do |format|
      format.json {render :json => @users.to_json}
    end
  end

end
