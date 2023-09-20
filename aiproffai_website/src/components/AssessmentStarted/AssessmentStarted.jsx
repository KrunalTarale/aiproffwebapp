import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import questions from "./questions";
import { useNavigate } from "react-router-dom";
import "./assessmentStarted.css";

const AssessmentStarted = () => {

  

  const params = useParams();
  let productId = params.id;

  var quizData = questions[productId];

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false); // Track quiz completion
  const [email, setEmail] = useState('');

  const [selectedAnswers, setSelectedAnswers] = useState([]); // State for selected answers


  useEffect(() => {
    if (selectedOption !== "") {
      setSelectedAnswers([...selectedAnswers, selectedOption]);
    }
  }, [selectedOption]);


  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {  

    // Check if the selected option is correct
    if (selectedOption === quizData[currentQuestion]?.answer) {
      setScore(score + 1);
    }

    // Move to the next question if it exists
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      // If no more questions, mark the quiz as completed
      setQuizCompleted(true);
    }

  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        // Auto-submit the quiz when time is up
        clearInterval(timer);
        setQuizCompleted(true); // Mark the quiz as completed when the timer runs out
      }
    }, 1000);

    

    // Cleanup timer when component unmounts
    return () => clearInterval(timer);
  }, [timeLeft]);

  const submitQuiz = async () => {
    
    const res = await fetch('http://localhost:3000/send_result', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
      },
      body: JSON.stringify({
        questions :quizData,
        answers : selectedAnswers,
        email : email,
        score : score,
        outoff : quizData.length
    })
  })

  const data = await res.json();
  console.log(data);
  alert(data.message)
    navigate("/assessment"); 
  };

  // Check if quizData is undefined or empty
  if (!quizData || quizData.length === 0) {
    return <div>No quiz data available for this product.</div>;
  }

  if (quizCompleted) {
    // Display the score and submit button when the quiz is completed or timer runs out
    return (
      <div className="quiz_section quiz_completed">
        <h2>Quiz Completed!</h2>
        <p>
          
          Your Score: {score} out of {quizData.length}
        </p>

        <p>
            Enter your E-mail Address To see Answers
        </p> 

        <input type="email" name="email" id="" placeholder="Enter your E-mail Address" onChange={(event) => setEmail(event.target.value)}/> <br/>

        <button onClick={submitQuiz} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
      </div>
    );
  }

  return (
    <div className="quiz_container">
      <h1 className="quiz_title">Quiz</h1>
      <div className="quiz_section">
        <div>
          <p className="question_number">Question {currentQuestion + 1}</p>
          <p className="timer">
            Time Remaining: {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </p>
          <h2 className="question">{quizData[currentQuestion]?.question}</h2>
          {/* Display the timer */}

          <ul>
            {quizData[currentQuestion]?.options &&
              quizData[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <label className="option">
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option}
                      className="option-input radio"
                      onChange={() => handleOptionSelect(option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
          </ul>
          <button
            type="button"
            className="next_btn text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      </div>

    </div>
  );
};

export default AssessmentStarted;
