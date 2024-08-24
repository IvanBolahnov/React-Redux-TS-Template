import { useEffect, FC } from "react"
import BaseTemplate from "../../templates/BaseTemplate"
import { Link } from "react-router-dom"

import "./index.scss"

const ErrorPage: FC = () => {
	useEffect(() => {
		document.title = "404 | Page Not Found"
	}, [])

	return (
		<BaseTemplate>
			<h1>
				<span>404</span>&nbsp;<span>Page Not Found</span>
			</h1>
			<p>
				The page you are looking for does not exist.&nbsp;
				<Link className="notfound__link" to="/">
					Go home
				</Link>
			</p>
		</BaseTemplate>
	)
}

export default ErrorPage
