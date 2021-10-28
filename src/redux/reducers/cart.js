
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

export const cart = (state = initialState, action) =>{
    switch (action.type){
        case "ADD_COOKIE_CART": {
            const newItem = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }
            const arr = [].concat.apply([], Object.values(newItem));
            const totalCookies = arr.reduce((sum, obj) => obj.price + sum, 0);
            return {
                ...state,
                items: newItem,
                totalCount: arr.length,
                totalPrice: totalCookies
            };
        }
        default:
            return state
    }
}

export default cart;