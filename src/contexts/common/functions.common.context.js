import { REDUCER_KEY } from "./constants.common.context";

export function CommonContextFunctionsRegister({ dispatch, state }) {
  return {
    dataSource: {
      update(key, value) {
        dispatch({
          type: REDUCER_KEY.dataSource.UPDATE,
          data: {
            key,
            value,
          },
        });
      },
    },
    cart: {
      update(key, value) {
        dispatch({
          type: REDUCER_KEY.cart.UPDATE,
          data: {
            key,
            value,
          },
        });
      },
      add(data) {
        dispatch({
          type: REDUCER_KEY.cart.ADD,
          data: {
            data
          },
        });
      },
      items: (item_index) => ({
        remove() {
            dispatch({
                type: REDUCER_KEY.cart.items.REMOVE,
                data: {
                    item_index
                },
            });
        },
        update(key, value) {
          dispatch({
            type: REDUCER_KEY.cart.items.UPDATE,
            data: {
              item_index,
              key,
              value,
            },
          });
        },
      }),
    },
  };
}
