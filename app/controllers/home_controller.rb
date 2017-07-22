class HomeController < ApplicationController
  def index
  end

  def download_cv
    send_file "#{Rails.root}/app/assets/files/CV Sebastián de la Cerda.pdf", type: "application/pdf", x_sendfile: true
  end

  def do_contact
    ContactMailer.my_email(params[:name], params[:email], params[:phone_number], params[:message]).deliver
  end
end
