import { combineReducers, configureStore } from "@reduxjs/toolkit"
import basketReducer from "./basket.js"
//1.引入储存
import { persistStore, persistReducer } from "redux-persist"
//2.redux 默认储存方式
import storage from "redux-persist/lib/storage"
//3.配置
const persistConfig = {
  key: "root",
  storage,
  //whitelist里是需要可持续化存储的reducer
  whiteList: ["basketStore"]
}
//结合reducer
const reducers = combineReducers({
  basketStore: basketReducer
})

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers)
})

export const persist = persistStore(store)
export default store

// 1.npm i redux-persist --save redux 可持续储存
//2.引入储存
//3.配置
//4.index.js中导入使用
