require "test_helper"

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(first_name: "Sam", last_name: "Smith", email: "sam@example.com")
  end
  
  test "user_should_be_valid" do 
    assert @user.valid?
  end

  test "first_name_should_not_be_blank" do
    @user.first_name = ""
    assert_not @user.valid?
  end

  test "last_name_should_not_be_blank" do
    @user.last_name = ""
    assert_not @user.valid?
  end

  test "email_should_not_be_blank" do
    @user.email = ""
    assert_not @user.valid?
  end

  test "first_name_should_not_exceed_50_characters" do
    @user.first_name = "a" * 51
    assert_not @user.valid?
  end

  test "last_name_should_not_exceed_50_characters" do
    @user.last_name = "a" * 51
    assert_not @user.valid?
  end

  test "email_should_be_unique" do
    duplicate_user = @user.dup 
    @user.save
    assert_not duplicate_user.valid?
  end

  test "email_addresses_should_be_saved_as_lower-case" do 
    mixed_case_email = "Foo@ExAMPle.CoM"
    @user.email = mixed_case_email
    @user.save
    assert_equal mixed_case_email.downcase, @user.reload.email 
  end

  test "email_validation_should_accept_valid_addresses" do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org 
                        first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end 
  end

  test "email validation should reject invalid addresses" do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example. 
                          foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?, "#{invalid_address.inspect} should be invalid"
    end 
  end

end