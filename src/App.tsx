
import { useStepContext } from '@chakra-ui/react';
import './App.css'
import { useEffect, useState } from 'react'
import { IQuestion,IUserAnswer } from './types';
import { getQuestionList } from './services/fatchQuestions';
import { Difficulty, totalQuestion } from './constants';
function App() {
  const [startQuiz,setStartQuiz] = useState(false);
  const [questions,setQuestions] = useState<IQuestion[]>([]);
  const [userAnswer,setUserAnswer] = useState<IUserAnswer[]>([]);
  const [loading,setLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score,setScore] = useState(0);
  const [gameOver, setgameOver] = useState(false);

  useEffect(() => {
    const fetchQusetions = async() => {
      const questionListing = await getQuestionList(totalQuestion,Difficulty.EASY);
      setQuestions(questionListing);
      setLoading(false);
    };
    fetchQusetions();
  },[])
  return (
    <div className="App">

    </div>
  )
}

export default App
