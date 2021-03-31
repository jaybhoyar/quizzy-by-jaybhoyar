require "test_helper"

class AttemptAnswerTest < ActiveSupport::TestCase
  def setup
    admin_user = User.new(first_name: "Sam", last_name: "Smith", email: "sam@example.com",
      password: "default", password_confirmation: "default", role:"administrator")
    quiz = admin_user.quizzes.new(name:"Animal Kingdom")
    @question = quiz.questions.new(title: "What do flamingos eat?", 
      options_attributes: [
      {:value => "correct_option", :is_correct => true}, 
      {:value => "incorrect_option", :is_correct => false}, 
    ])
    @user = User.new(first_name: "Eve", last_name: "Smith", email: "eve@example.com",
      password: "12345", password_confirmation: "123456", role:"standard")
    @attempt = Attempt.new(user_id: @user.id, quiz_id: quiz.id)
    @attempt_answer = @attempt.attempt_answers.new(value:"cheese", question_id: @question.id)
  end

  def test_attempt_answer_should_be_valid
    assert_not @attempt.valid?
  end

  def test_attempt_answer_value_should_not_be_blank
    @attempt_answer.value = ""
    assert_not @attempt_answer.valid?
    assert_equal ["Question must exist", "Value can't be blank", "Question can't be blank", "Attempt can't be blank"], @attempt_answer.errors.full_messages
  end
  
  def test_attempt_answer_attempt_should_not_be_blank
    @attempt_answer.attempt_id = ""
    assert_not @attempt_answer.valid?
    assert_equal ["Question must exist", "Question can't be blank", "Attempt can't be blank"], @attempt_answer.errors.full_messages
  end

  def test_attempt_answer_question_should_not_be_blank
    @attempt_answer.question_id = ""
    assert_not @attempt_answer.valid?
    assert_equal ["Question must exist", "Question can't be blank", "Attempt can't be blank"], @attempt_answer.errors.full_messages
  end
end
