export const onChangeSearchBooks = (text) => {
    return {
        type: 'CHANGE_SEARCH_BOOKS',
        payload: text
    }
}