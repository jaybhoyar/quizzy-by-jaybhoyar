require "test_helper"

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(first_name: "Sam", last_name: "Smith", email: "sam@example.com",
                      password: "123456", password_confirmation: "123456")
  end

  def test_user_should_be_valid  
    assert @user.valid?
  end

  def test_first_name_should_not_be_blank
    @user.first_name = ""
    assert_not @user.valid?
  end

  def test_last_name_should_not_be_blank
    @user.last_name = ""
    assert_not @user.valid?
  end

  def test_email_should_not_be_blank
    @user.email = ""
    assert_not @user.valid?
  end

  def test_first_name_should_not_exceed_50_characters
    @user.first_name = "a" * 51
    assert_not @user.valid?
  end

  def test_last_name_should_not_exceed_50_characters
    @user.last_name = "a" * 51
    assert_not @user.valid?
  end

  def test_email_should_be_unique
    duplicate_user = @user.dup 
    @user.save
    assert_not duplicate_user.valid?
  end

  def test_email_addresses_should_be_saved_as_lower_case 
    mixed_case_email = "Foo@ExAMPle.CoM"
    @user.email = mixed_case_email
    @user.save
    assert_equal mixed_case_email.downcase, @user.reload.email 
  end

  def test_email_validation_should_accept_valid_addresses
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org 
                        first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end 
  end

  def test_email_validation_should_reject_invalid_addresses
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example. 
                          foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?, "#{invalid_address.inspect} should be invalid"
    end 
  end

  def test_user_should_have_a_valid_role
    assert @user.valid? if @user.role == "standard" || "administrator"
  end

  def test_password_should_not_be_blank
    @user.password = @user.password_confirmation = " " * 6
    assert_not @user.valid?
  end

  def test_password_should_have_a_minimum_length
    @user.password = @user.password_confirmation = "a" * 5
    assert_not @user.valid?
  end

  def test_password_and_password_confirmation_should_match
    assert @user.valid? if @user.password == @user.password_confirmation
  end

end