require 'test_helper'

class AccountsControllerTest < ActionDispatch::IntegrationTest
  test "should get form_send" do
    get accounts_form_send_url
    assert_response :success
  end

  test "should get main" do
    get accounts_main_url
    assert_response :success
  end

  test "should get password_verify" do
    get accounts_password_verify_url
    assert_response :success
  end

  test "should get wallets" do
    get accounts_wallets_url
    assert_response :success
  end

end
