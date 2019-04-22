import { TOGGLE_SIGNUP } from '../actions';

export default function signup(state = false, action) {
  console.log(action.toggle)
  switch(action.type) {
    case TOGGLE_SIGNUP:
      return action.toggle;
    default:
      return state;
  }
}