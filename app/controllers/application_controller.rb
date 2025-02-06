class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  # before_action :authenticate_user!

  # Configurar el layout para login y signup
  def layout_by_resource
    if devise_controller?
      "devise"  # Usamos el layout que creamos para login y signup
    else
      "application"  # Usamos el layout normal para el resto de la aplicación
    end
  end
end
