const initialState = {
    counter: 0,
};

const counter = (state = initialState.counter, action) => {
    switch (action.type) {
    case "INCREMENT":
        return state + 1;
    case "DECREMENT":
        return state - 1;
    case "CLEAR":
        return 0;
    default:
        return state;
    }
};

export default counter;