class PhotosController < ApplicationController
  def create
    params[:photo][:user_id] = current_user.id
    @photo = Photo.new(params[:photo])
    @photo.save

    respond_to do |format|
      format.json { render :json => @photo.to_json}
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def index
    if params[:user_id]
      @photos = Photo.all
    else
      @photos = Photo.all
    end

    respond_to do |format|
      format.html {render :index}
      format.json {render :json => @photos.to_json}
    end

  end

  def show
    @photo = Photo.find(params[:id])

    respond_to do |format|
      format.json {render :json => @photo.to_json}
    end
  end


end
