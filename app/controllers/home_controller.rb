class HomeController < ApplicationController
  def index
  end

  def do_contact
    ContactMailer.my_email(params[:name], params[:email], params[:phone], params[:message]).deliver
    ContactMailer.user_email(params[:name], params[:email]).deliver
  end
end
