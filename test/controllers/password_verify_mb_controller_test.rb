require 'test_helper'

class PasswordVerifyMbControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get password_verify_mb_index_url
    assert_response :success
  end

end
