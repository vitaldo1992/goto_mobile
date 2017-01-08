require 'test_helper'

class MobileGotoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mobile_goto_index_url
    assert_response :success
  end

end
