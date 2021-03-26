import React from 'react';
import Question from './Questions/Questions';
import Options from './Options/Options';
import { connect } from 'react-redux'
 import { DISPLAY_SCORE } from '../Services/constants'
import './Quiz.css';
import { questions, answers, solutions } from './Data';
import Score from "../components/Score"




class Quiz extends React.Component {
       state = {
            questions: questions,
            answers: answers,
            correctAnswers: solutions,
            question: 0,
            count: 1,
            score: 0,
        }
       

    checkAnswer = (answer) => {
        let { correctAnswers, count, score } = this.state;
        if (answer === correctAnswers[count]) {
            //this.setState({
            //   score: score + 1,
            //});
            //   passing the data to redux store
            //Action
            this.props.dispatch({
                type: DISPLAY_SCORE,
                score: score + 1
            });
        }
    }

    nextQuestion=(count)=> {
        this.setState({
            count: count + 1
        });
    }

    refreshPage=()=> {
        this.setState({
            question: 0,
            count: 1,
            score: 0,
        })
    }
   
    render() {
        let { questions, answers, count}= this.state;
        return (
            <div className="Container">
                {
                    count <= Object.keys(questions).length ?
                <div className="card">
                   
                            <Question
                                question={questions[count]}
                            />
                            <Options
                                answer={answers[count]}
                                checkAnswer={this.checkAnswer.bind(this)}
                            />
                            <button className="button" onClick={()=>this.nextQuestion(count)}>
                                NEXT
                            </button>
                        </div>
                        :
                    <div className="card">
                        <Score/>
                    <button className="button" onClick={()=>this.refreshPage()}>Play Again</button>
                    </div>
                }
            </div>
        );
    }
}




export default connect(null)(Quiz) ;