// COMPONENTS
import Button from "./Button"
import CTAModal from "./CTAModal"
// STATE
import { useState } from "react"

const CTA = () => {
	// USESTATE FOR MODAL
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}
	function openModal() {
		setIsOpen(true)
	}
	return (
		<section
			id="contacts"
			className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow"
		>
			<div className="flex-1 flex flex-col">
				{/* ---TITLE ---  */}
				<h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
					Let's get in touch
				</h2>
				{/* ---- DESC ----  */}
				<p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
					I enjoy discussing new projects and design challenges. Please share as
					much info, as possible so we can get the most out of our first
					catch-up.
				</p>
			</div>

			{/* -----BUTTON------ */}
			<div
				className=" flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10 "
				onClick={openModal}
			>
				<Button name="Get Started" />
			</div>

			{/* ---- MODAL -----  */}
			<CTAModal closeModal={closeModal} isOpen={isOpen} />
		</section>
	)
}

export default CTA
