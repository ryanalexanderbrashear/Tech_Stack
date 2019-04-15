//Action Creator function, containing an action
export const selectLibrary = (libraryId) => {
    //The below return is our action that is returned from the Action Creator
    return {
        type: 'select_library',
        payload: libraryId
    };
};