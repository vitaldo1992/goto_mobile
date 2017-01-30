Rails.application.routes.draw do

  get 'accounts/form_send' => 'form_send'

  get 'accounts/main' => 'main'

  get 'accounts/password_verify' => 'password_verify'

  get 'accounts/wallets' => 'wallets'

  get 'statics/landing'

  get 'login_goto_mb' => 'login_goto_mb#index'

  get 'landing_goto_mb' => 'landing_goto_mb#index'

  get 'mobile_goto/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'mobile_goto#index'
end
