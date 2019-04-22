export const TOGGLE_SIGNUP = "TOGGLE_SIGNUP";

export function toggleSignUp (boolean) {
  return { 
    type: TOGGLE_SIGNUP,
    toggle: boolean,
  }
}