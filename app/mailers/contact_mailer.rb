class ContactMailer < ApplicationMailer
  layout "mailer"

  def user_email(user, email)
    @user_name = user.to_s
    mail(to: email, subject: 'Recibí tu contacto')
  end

  def my_email(name, email, phone_number, message)
    @user = {name: name, email: email, phone_number: phone_number, message: message}
    mail(to: 'sedelacerda@uc.cl', subject: 'Nuevo contacto de '<<@user[:name].to_s)
  end
end
