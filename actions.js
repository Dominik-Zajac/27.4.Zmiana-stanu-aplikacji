export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: 1,
        text
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id: 1,
        text: text
    }
}

function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id: 1
    }
}

function thumbUpComment(id, handUp) {
    return {
        type: THUMB_UP_COMMENT,
        id: 1,
        handUp: handUp++
    }
}

function thumbDownComment(id, handDown) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: 1,
        hadnDown: handDown--
    }
}