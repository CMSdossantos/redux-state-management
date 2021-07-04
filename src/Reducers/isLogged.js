const loggedReducer = (state = false, action) => {
    switch(action.type){
        case "sign_in": return !state;
    }
}

export default loggedReducer;