export const REDUCER_KEY = {
    dataSource: {
        UPDATE: "DATA_SOURCE_UPDATE"
    },
    cart: {
        UPDATE: "CART_UPDATE",
        ADD: "CART_ITEMS_ADD",
        items: {
            REMOVE: "CART_ITEMS_REMOVE",
            UPDATE: "CART_ITEMS_UPDATE"
        }
    }
}

export const INITIAL_STATE = {
    dataSource: {},
    cart: {
        items: []
    }
}