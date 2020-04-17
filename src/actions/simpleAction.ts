/*
 src/actions/simpleAction.js
*/
export const simpleAction = () => (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
   }