import React from 'react';
import './Options.css';

const Options = (props) => {
    let answers = Object.keys(props.answer).map((answers) => (

    <li className="options" onClick={() => props.checkAnswer(answers)} key={answers}>
    {props.answer[answers]}</li>
    ));

        return (
            <>
                <ul>{answers}</ul>
            </>
        );
}

export default Options;