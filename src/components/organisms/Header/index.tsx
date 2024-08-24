import { FC, useState } from "react"
import "./index.scss"
import { Link } from "react-router-dom"

const Header: FC = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo">
					React + Redux + TS
				</Link>
				<nav className="header__nav">
					<Link to="/add" className="header__link">
						Add user
					</Link>
				</nav>
				<button
					className={`header__toggle-nav${
						isNavOpen ? " header__toggle-nav--open" : ""
					}`}
					onClick={() => {
						setIsNavOpen((state) => !state)
					}}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="3" y="5" width="18" height="2" rx="1" fill="#FDFDFD" />
						<rect x="3" y="11" width="18" height="2" rx="1" fill="#FDFDFD" />
						<rect x="3" y="17" width="18" height="2" rx="1" fill="#FDFDFD" />
					</svg>
				</button>
			</div>
			<nav
				className={`header__mobile-nav${
					isNavOpen ? " header__mobile-nav--open" : ""
				}`}
				inert={isNavOpen ? undefined : ""} // React doesn't support inert yet
			>
				<Link to="/add" className="header__link">
					Add user
				</Link>
			</nav>
		</header>
	)
}

export default Header
