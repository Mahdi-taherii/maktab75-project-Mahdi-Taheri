import { REDUCER_KEY } from "./constants.common.context";
import * as _ from 'lodash'
import { getDataType } from "../../utils";

export default function CommonReducer(_state, action) {

    const state = _.cloneDeep(_state)

    const { key, value } = action.data

    switch (action.type) {
        case REDUCER_KEY.dataSource.UPDATE: {
            state.dataSource[key] = value

            break
        }
        case REDUCER_KEY.cart.UPDATE: {
            state.cart[key] = value
            break
        }
        case REDUCER_KEY.cart.ADD: {
            const { data } = action.data
            state.cart.items.push(data)
            break
        }
        case REDUCER_KEY.cart.items.REMOVE: {
            const { item_index } = action.data
            state.cart.items.splice(item_index, 1)
            break
        }
        case REDUCER_KEY.cart.items.UPDATE: {
            const { item_index } = action.data
            if (getDataType(key) === "[object object]") {
                for (const [field, value] of Object.entries(key)) {
                    state.cart.items[item_index][field] = value
                }
            } else {
                state.cart.items[item_index][key] = value
            }
            break
        }
        default: {
            return _state
        }
    }

    return state
    
}