import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type userType = {
	id: number
	name: string
	email: string
}

export type usersStateType = {
	users: userType[]
}

const initialState: usersStateType = {
	users: [
		{
			id: Number(new Date()),
			name: "Ivan",
			email: "ivan.bolahnov@gmail.com",
		},
	],
}

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<userType>) => {
			state.users = [...state.users, action.payload]
		},
		deleteUser: (state, action: PayloadAction<userType["id"]>) => {
			state.users = state.users.filter((user) => user.id !== action.payload)
		},
	},
})

export default usersSlice.reducer
