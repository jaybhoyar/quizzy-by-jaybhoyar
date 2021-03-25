require "test_helper"

class QuestionTest < ActiveSupport::TestCase
  def setup
    user = User.create(first_name: "Sam", last_name: "Smith", email: "sam@example.com", password: "welcome", password_confirmation: "welcome")
    quiz = user.quizzes.new(name:"Animals")
    @question = quiz.questions.new(title: "What do flamingos eat?", options_attributes: [{value: "correct_option", is_correct:true}, {value: "wrong_answer", is_correct:false}])
  end

  def test_question_should_be_valid
    assert @question.invalid?
  end

  def test_question_title_should_not_be_blank
    @question.title = ""
    assert_not @question.valid?
    assert_equal ["Title can't be blank", "Quiz can't be blank"], @question.errors.full_messages
  end

  def test_question_quiz_should_not_be_blank
    @question.quiz_id = ""
    assert_not @question.valid?
    assert_equal ["Quiz can't be blank"], @question.errors.full_messages
  end

  def test_question_options_should_not_be_blank
    @question.options = []
    assert_not @question.valid?
    assert_equal ["Options can't be blank", "Options is too short (minimum is 2 characters)", "Quiz can't be blank"], @question.errors.full_messages
  end

  def test_question_title_should_not_exceed_250_characters
    @question.title = "a" * 251
    assert_not @question.valid?
    assert_equal ["Title is too long (maximum is 250 characters)", "Quiz can't be blank"], @question.errors.full_messages
  end

  def test_question_should_have_minimum_two_options
    @question.options.length >=2
    assert_not @question.valid?
    assert_equal ["Quiz can't be blank"], @question.errors.full_messages
  end

  def test_question_should_have_maximum_four_options
    @question.options.length <=4
    assert_not @question.valid?
    assert_equal ["Quiz can't be blank"], @question.errors.full_messages
  end


end
