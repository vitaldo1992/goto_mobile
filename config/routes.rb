Rails.application.routes.draw do

  get 'accounts/form_send'

  get 'accounts/main'

  get 'accounts/password_verify'

  get 'accounts/wallets'

  get 'statics/landing'

  get 'password_verify_mb' => 'password_verify_mb#index'

  get 'wallets_mb' => 'wallets_mb#index'

  get 'main_mb' => 'main_mb#index'

  get 'form_send_money_mb' => 'form_send_money_mb#index'

  get 'login_goto_mb' => 'login_goto_mb#index'

  get 'landing_goto_mb' => 'landing_goto_mb#index'

  get 'mobile_goto/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'mobile_goto#index'
end
