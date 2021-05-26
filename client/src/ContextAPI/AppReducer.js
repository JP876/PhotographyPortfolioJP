const AppReducer = (state, action) => {
    switch (action.type) {
        case 'setValue':
            return { ...state, value: action.value };
        case 'setSelectedIndex':
            return { ...state, selectedIndex: action.selectedIndex };
        case 'setCurrentCategory':
            return { ...state, currentCategory: action.currentCategory };
        case 'loggedIn':
            return { ...state, isLoggedIn: true };
        case 'loggedOut':
            return { ...state, isLoggedIn: false };
        case 'setCurrentImages':
            return { ...state, currentImages: action.currentImages };
        default:
            return state;
    }
};

export default AppReducer;
