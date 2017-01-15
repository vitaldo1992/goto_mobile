require 'test_helper'

class WalletsMbControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get wallets_mb_index_url
    assert_response :success
  end

end
