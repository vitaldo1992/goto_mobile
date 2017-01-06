require 'test_helper'

class WelcomeGotoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get welcome_goto_index_url
    assert_response :success
  end

end
