require 'test_helper'

class FormSendMoneyMbControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get form_send_money_mb_index_url
    assert_response :success
  end

end
