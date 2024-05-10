// COMPONENT
import AboutMeModal from "./AboutMeModal"
// STATE
import { useState } from "react"
// DATA
import { features } from "../constants"

const FeatureCard = ({ icon, title, desc, content, index }) => {
	// useState for opening modal
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}
	function openModal() {
		setIsOpen(true)
	}

	return (
		// ABOUT ME CARD
		<div
			onClick={openModal}
			className={`flex flex-row p-6 rounded-[20px] cursor-pointer 
			 ${index !== features.length - 1 ? "mb-6" : "mb-0"} 
			feature-card`}
		>
			{/*------- ICON -------- */}
			<div
				className={`w-[64px] h-[64px] rounded-full flex justify-center items-center   bg-dimBlue`}
			>
				<span className="text-[35px] text-secondary">{icon}</span>
			</div>

			{/*------- TITLE && DESC. -------- */}
			<div className="flex-1 flex flex-col ml-3">
				<h4 className="font-poppins font-sembold text-white text-[18px] leading-[23px] mb-1">
					{title}
				</h4>
				<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
					{desc}
				</p>
			</div>

			{/*------- MODAL -------- */}
			<AboutMeModal
				isOpen={isOpen}
				closeModal={closeModal}
				title={title}
				desc={desc}
				content={content}
			/>
		</div>
	)
}
const AboutMe = () => {
	return (
		<section id="about-me" className="flex md:flex-row flex-col sm:py-16 py-6">
			<div className="flex justify-center items-start flex-1 flex-col">
				{/*------ TITLE ----  */}
				<h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
					Know Me More.{" "}
				</h2>

				{/* ------- ABOUT ME DESC ------  */}
				<p
					className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
				>
					I’m a self-taught Web Developer based in Quezon City, Philippines. My
					passion are crafting user-friendly websites with creative solutions.
					With expertise in front-end and responsive design.
				</p>

				{/* ---------DOWNLOAD CV BUTTON------------  */}
				<button className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-10">
					<a href="/Jayson Romero - MyCV .pdf" download>
						Download CV
					</a>
				</button>
			</div>

			{/* ---------- FEATURE CARD COMPONENT fr. above ---------- */}
			<div
				className={`flex-1 flex justify-center items-center flex-col md:ml-10 ml-0 md:mt-0 mt-10 relative`}
			>
				{features.map((feature, index) => (
					<FeatureCard key={feature.id} {...feature} index={index} />
				))}
			</div>
		</section>
	)
}

export default AboutMe
