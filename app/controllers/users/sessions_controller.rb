# frozen_string_literal: true

# app/controllers/users/sessions_controller.rb
class Users::SessionsController < Devise::SessionsController
  # Puedes personalizar las acciones de login (new), autenticación (create) y logout (destroy) si es necesario

  def new
    super  # Llama al método de la clase padre (Devise::SessionsController)
  end

  def create
    super  # Llama al método de la clase padre (Devise::SessionsController)
  end

  def destroy
    super  # Llama al método de la clase padre (Devise::SessionsController)
  end
end
