const initialState = {
    note_to_edit: {}
}

export const noteReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'EDIT_NOTE':
        return payload;

    default:
        return state
    }
}
