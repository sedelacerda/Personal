class ContactMailer < ApplicationMailer
  def user_email(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end

  def my_email(name, email, phone_number, message)
    @user = {name: name, email: email, phone_number: phone_number, message: message}
    mail(to: ENV['my_address'], subject: 'Welcome to My Awesome Site')
  end
end
