import {
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREMENT,
  INCREMENT,
  CLEAR,
} from "./cartTypes";

// local storage
const Storage = (items) => {
  localStorage.setItem("items", JSON.stringify(items.length > 0 ? items : []));
};

// handles how items are added up
export const sumItems = (items) => {
  Storage(items);
  let itemCount = items.reduce((total, product) => total + product.quantity, 0);

  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemCount, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (!item) {
        state.items.push({
          ...action.payload,
          quantity: state.count,
        });
      } else {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: state.count,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        ...sumItems(state.items),
        items: [...state.items],
      };
    }

    case REMOVE_ITEM:
      return {
        ...state,
        count: state.count,
        ...sumItems(
          state.items.filter((item) => item.id !== action.payload.id)
        ),
        items: [...state.items.filter((item) => item.id !== action.payload.id)],
      };

    case CLEAR:
      return {
        items: [],
        ...sumItems([]),
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      if (state.count <= 0) {
        return {
          ...state,
          count: 0,
        };
      } else {
        return {
          ...state,
          count: state.count - 1,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
