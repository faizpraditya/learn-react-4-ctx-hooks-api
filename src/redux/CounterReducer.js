import ActionType from "./ActionType";

const initialState = {
    nilai : 5,
    todo : [
        {
            todo : 'todo name',
            desc : 'todo desc',
        },
    ]
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.PLUS:
            return {
                ...state,
                nilai : state.nilai + 1
            }
        case ActionType.MINUS:
            return {
                ...state,
                nilai : state.nilai - 1
            }
        case ActionType.ADD_TODO:
            return {
                ...state,
                todo : [...state.todo, action.payload]
            }
        default: return state
    }
}

export default counterReducer