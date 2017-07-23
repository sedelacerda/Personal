class HomeController < ApplicationController
  def index
  end

  def download_cv
    send_file "#{Rails.root}/app/assets/files/CV Sebastián de la Cerda.pdf", type: "application/pdf", x_sendfile: true
  end

  def do_contact
    ContactMailer.my_email(params[:contact][:name], params[:contact][:email], params[:contact][:phone_number], params[:contact][:message]).deliver
    ContactMailer.user_email(params[:contact][:name], params[:contact][:email]).deliver
    respond_to do |format|
      format.js {render inline: "location.reload();" }
    end
  end
end
