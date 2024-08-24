import { FC, useEffect } from "react"
import BaseTemplate from "../../templates/BaseTemplate"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import UserCard from "../../molecules/Card"

import "./index.scss"

const RootPage: FC = () => {
	useEffect(() => {
		document.title = "React + Redux + TS"
	}, [])

	const { users } = useSelector((state: RootState) => state.users)

	return (
		<BaseTemplate>
			{users.map((user) => (
				<UserCard user={user} key={user.id} />
			))}
		</BaseTemplate>
	)
}

export default RootPage
