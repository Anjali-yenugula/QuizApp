import React from "react";
import { connect } from "react-redux";

 const Score=(props)=>{
     return(
         <div className="card">
                <p class="score">You scored {props.score} of 10</p>
        </div>
     )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        score: state.score,
        correctAnswer: state.correctAnswer
    }
}


 export default connect(mapStateToProps)(Score);
