class ApplicationController < ActionController::Base
  protect_from_forgery
  include SessionsHelper

  def set_flash(message)
    flash[:notices] ||= []
    flash[:notices] << message
  end
end
