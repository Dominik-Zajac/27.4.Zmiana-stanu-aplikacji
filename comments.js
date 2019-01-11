import {
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT
} from './actions';

const initialState = {
    comments: [],
    users: []
};

function comments(state = [], action) {
    switch (action.type) {
        
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state.comments];
        
        case DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        
        default:
            return state
    }
}

export default comments;