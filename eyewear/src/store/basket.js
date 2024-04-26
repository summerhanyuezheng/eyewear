import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  basketList: []
}
const basketStore = createSlice({
  name: "basketStore",
  initialState,
  reducers: {
    addBasketList: (state, action) => {
      // action.payload should now include { id, color, size }
      const existingItem = state.basketList.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
        // Update the color and size if they're different
        existingItem.color = action.payload.color;
        existingItem.size = action.payload.size;
      } else {
        // Add the new item with the selected color and size
        state.basketList.push({...action.payload, count: 1});
      }
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
