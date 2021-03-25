import { DISPLAY_SCORE } from '../constants'

 const initialState = {
     score:0
 }
export default function quizScore(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_SCORE:
            
            return {
                ...state,
                score: state.score + action.score
            }
        default:
            return state
    }
}
