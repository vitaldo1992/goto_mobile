require 'test_helper'

class MainMbControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get main_mb_index_url
    assert_response :success
  end

end
