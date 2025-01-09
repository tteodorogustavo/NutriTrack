const initialState = {
    email: '',
    password: '',
    status: 0
};

const AuthReducer = (state = initialState, action) => {

    //alteração dos states
    if(action.type === 'changeEmail') {
        return { ...state, email: action.payload.email };
    }

    return state;
}
export default AuthReducer;