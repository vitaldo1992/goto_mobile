require 'test_helper'

class LandingGotoMbControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get landing_goto_mb_index_url
    assert_response :success
  end

end
