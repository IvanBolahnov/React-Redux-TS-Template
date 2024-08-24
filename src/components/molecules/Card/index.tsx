import { FC } from "react"
import { userType } from "../../../store/reducers/usersSlice"
import { useDispatch } from "react-redux"
import { usersSlice } from "../../../store/reducers/usersSlice"

import "./index.scss"

type UserCardPropType = {
	user: userType
}

const UserCard: FC<UserCardPropType> = ({ user }) => {
	const dispatch = useDispatch()

	const { deleteUser } = usersSlice.actions

	return (
		<div className="card">
			<table>
				<tbody>
					<tr>
						<td>Id</td>
						<td>{user.id}</td>
					</tr>
					<tr>
						<td>Name</td>
						<td>{user.name}</td>
					</tr>
					<tr>
						<td>E-mail</td>
						<td>{user.email}</td>
					</tr>
					<tr>
						<td colSpan={2} className="card__delete">
							<button
								onClick={() => {
									dispatch(deleteUser(user.id))
								}}
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default UserCard
