require "test_helper"

class QuizTest < ActiveSupport::TestCase
  def setup
    user = User.create(first_name: "Sam", last_name: "Smith", email: "sam@example.com", password: "welcome", password_confirmation: "welcome")
    @quiz = user.quizzes.new(name:"Animals")
  end

  def test_quiz_should_be_valid
    assert @quiz.valid?
  end


  def test_quiz_name_should_not_be_blank
    @quiz.name = ""
    assert_not @quiz.valid?
    assert_equal ["Name can't be blank"], @quiz.errors.full_messages
  end

  def test_quiz_name_should_not_exceed_250_characters
    @quiz.name = "a" * 251
    assert_not @quiz.valid?
    assert_equal ["Name is too long (maximum is 250 characters)"], @quiz.errors.full_messages
  end

  def test_quiz_user_should_not_be_blank
    @quiz.user_id = ""
    assert_not @quiz.valid?
    assert_equal ["User can't be blank"], @quiz.errors.full_messages
  end

end
