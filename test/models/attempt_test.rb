require "test_helper"

class AttemptTest < ActiveSupport::TestCase
  def setup
    admin_user = User.new(first_name: "Sam", last_name: "Smith", email: "sam@example.com",
      password: "default", password_confirmation: "default", role:"administrator")
    @quiz = admin_user.quizzes.new(name:"Animal Kingdom")

    @user = User.new(first_name: "Eve", last_name: "Smith", email: "eve@example.com",
      password: "12345", password_confirmation: "123456", role:"standard")
    @attempt = Attempt.create(user_id: @user.id, quiz_id: @quiz.id)
  end

  def test_attempt_should_be_valid
    assert_not @attempt.valid?
  end

  def test_attempt_user_should_not_be_blank
    @attempt.user_id = nil
    assert_not @attempt.valid?
    assert_equal ["User must exist", "Quiz must exist", "User can't be blank", "Quiz can't be blank"], @attempt.errors.full_messages
  end

  def test_attempt_quiz_should_not_be_blank
    @attempt.quiz_id = nil
    assert_not @attempt.valid?
    assert_equal ["User must exist", "Quiz must exist", "User can't be blank", "Quiz can't be blank"], @attempt.errors.full_messages
  end

end
