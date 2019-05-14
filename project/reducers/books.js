const initialState = {
    books: [],
    changeSearch: '',
    loadingBooks: true,
    errorLoadingBooks: false
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_SEARCH_BOOKS':
            return {
                ...state,
                changeSearch: action.payload,
                loadingBooks: true,
                errorLoadingBooks: false
            }
        case 'LOADING_BOOKS':
            return {
                ...state,
                loadingBooks: false,
                errorLoadingBooks: false,
                books: action.payload
            }
        default: return state
    }
}