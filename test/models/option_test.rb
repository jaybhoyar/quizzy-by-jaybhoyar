require "test_helper"

class OptionTest < ActiveSupport::TestCase
  def setup
    user = User.create(first_name: "Sam", last_name: "Smith", email: "sam@example.com", password: "welcome", password_confirmation: "welcome")
    quiz = user.quizzes.new(name:"Animals")
    question = quiz.questions.new(title: "What do flamingos eat?")
    @option = question.options.new(value:"cheese", is_correct: false)
  end

  def test_option_should_be_valid
    assert @option.invalid?
  end


  def test_option_value_should_not_be_blank
    @option.value = ""
    assert_not @option.valid?
    assert_equal ["Value can't be blank", "Is correct can't be blank", "Question can't be blank"], @option.errors.full_messages
  end

  def test_option_is_correct_should_not_be_blank
    @option.is_correct = ""
    assert_not @option.valid?
    assert_equal ["Is correct can't be blank", "Is correct is not included in the list", "Question can't be blank"], @option.errors.full_messages
  end

  def test_option_question_should_not_be_blank
    @option.question_id = ""
    assert_not @option.valid?
    assert_equal ["Is correct can't be blank", "Question can't be blank"], @option.errors.full_messages
  end

  def test_option_value_should_not_exceed_150_characters
    @option.value = "a" * 151
    assert_not @option.valid?
    assert_equal ["Value is too long (maximum is 150 characters)", "Is correct can't be blank", "Question can't be blank"], @option.errors.full_messages
  end

  def test_option_is_correct_should_be_boolean
    @option.is_correct = true || false
    assert_not @option.valid?
  end

  
end
