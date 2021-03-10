import React, { Component } from 'react';
import Question from './Questions/Questions';
import Options from './Options/Options';
import './Quiz.css';
import {questions,answers,solutions} from './Data';

 class Quiz extends Component {

    state = {
        questions: questions,
        answers: answers,
        correctAnswers: solutions,
        correctAnswer: 0,
        count: 1,
        score: 0
    }

  
    checkAnswer = answer => {
        const { correctAnswers, count, score } = this.state;
        if (answer === correctAnswers[count]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[count]
            });
        } else {
            this.setState({
                correctAnswer: 0
            });
        }
    }

  
    nextQuestion = (count) => {
        this.setState({
            count: count + 1,
            correctAnswer: 0,
        });
    }

    refreshPage=()=>{
        window.location.reload(false);
    }

    render() {
        let { questions, answers, correctAnswer,  count, score } = this.state;
        return (
            <div className="Container">
                {count <= Object.keys(questions).length ?
                    (<>
                    <div className="card">
                        <Question
                            question={questions[count]}
                        />
                        <Options
                            answer={answers[count]}
                            step={count}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                        />
                        <button
                            className="button" onClick={() => this.nextQuestion(count)}>Next</button></div>
                    </>) : (
                        <div className="card">
                            <p>You scored {score} of {Object.keys(questions).length}</p>
                            <button className="button" onClick={this.refreshPage}>Play Again</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Quiz