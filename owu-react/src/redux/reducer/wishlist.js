import {CHECK_ITEM_IN_LIST} from '../action-types'

const initialState = {
    wishList: []
}
const reducer = (state = initialState, action) => {
    const {wishList} = state;
    const {type,payload} = action;
    switch (type) {
        case CHECK_ITEM_IN_LIST: {
            const updateWishList = wishList.filter((el) => el.id !== payload.id);

            if (updateWishList.length === wishList.length) {
                updateWishList.push(payload);
            }
            return {
                ...state, wishList: updateWishList
            }
        }
        default: {
            return state
        }
    }
}
export default reducer;
