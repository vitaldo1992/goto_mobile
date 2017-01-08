require 'test_helper'

class LoginGotoMbControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get login_goto_mb_index_url
    assert_response :success
  end

end
