import { combineReducers, configureStore } from "@reduxjs/toolkit"

import usersSlice from "./reducers/usersSlice"

const rootReducer = combineReducers({
	users: usersSlice,
})

export const store = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
