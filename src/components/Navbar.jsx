// REACT COMPONENT
import { useState } from "react"
// ICON
import { close, menu } from "../assets"
// DATA
import { navLinks } from "../constants"

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			{/*---------------LOGO------------ */}
			{/* <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" /> */}
			<h1 className="text-white font-poppins text-[25px] font-bold">
				Jay<span className="text-gradient">son.</span>
			</h1>

			{/* -------------NAVLINKS-----------  */}
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal cursor-pointer text-[16px] ${
							index === navLinks.length - 1 ? "mr-0" : "mr-10"
						} text-white`}
					>
						<a href={`${nav.link}`}>{nav.title}</a>
					</li>
				))}
			</ul>

			{/*---------MENU ICON FOR SMALL SCREEN ---------------*/}
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>
			</div>

			{/* -------------NAVLINKS FOR SMALL SCREEN-----------  */}
			<div
				className={`${
					toggle ? "flex" : "hidden"
				} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
			>
				<ul className="list-none flex flex-col justify-end items-center flex-1">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-poppins font-normal cursor-pointer text-[16px] ${
								index === navLinks.length - 1 ? "mr-0" : "mb-4"
							} text-white`}
						>
							<a href={`${nav.link}`}>{nav.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
