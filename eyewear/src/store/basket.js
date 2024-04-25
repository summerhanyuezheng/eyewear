import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  basketList: []
}
const basketStore = createSlice({
  name: "basketStore",
  initialState,
  reducers: {
    addBasketList: (state, action) => {
      console.log("action.payload", action.payload)
      state.basketList.push(action.payload)
    },
    clearBasketList: state => {
      state.basketList.length = 0
    },
    removeBasketList: (state, action) => {
      let index = state.basketList.findIndex(v => v.id === action.payload)
      state.basketList.splice(index, 1)
    },
    additemCount: (state, action) => {
      state.basketList.forEach(v => {
        if (v.id === action.payload) {
          v.count++
        }
      })
    },

    decrementCount: (state, action) => {
      state.basketList.forEach(v => {
        if (v.id === action.payload) {
          v.count--
        }
      })
    }
  }
})
export const { addBasketList } = basketStore.actions
export const { clearBasketList, removeBasketList, additemCount, decrementCount } = basketStore.actions
export default basketStore.reducer
