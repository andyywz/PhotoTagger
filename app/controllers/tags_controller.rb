class TagsController < ApplicationController
  def new
  end

  def create
    @tag = Tag.create!(params[:tag])
    respond_to do |format|
      format.json { render :json => @tag.to_json }
    end
  end

  def destroy
  end

  def index
    @tags = Tag.all
    respond_to do |format|
      format.json { render :json => @tags.to_json }
    end
  end

  def edit
  end

  def update
  end
end
