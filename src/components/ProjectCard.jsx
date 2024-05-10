// COMPONENT
import ProjectModal from "./ProjectModal"
// REACT COMPONENT
import { useState } from "react"

const ProjectCard = ({
	type,
	title,
	desc,
	content,
	technologies,
	date,
	url,
	img,
}) => {
	// useState for Modal
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}
	function openModal() {
		setIsOpen(true)
	}

	return (
		<div
			className="flex justify-between flex-col px-7 py-7 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card cursor-pointer"
			onClick={openModal}
		>
			{/* ----- IMAGE -------  */}
			<img
				src={img}
				alt="double_qoutes"
				className="w-full  rounded-[20px] object-contain bg-gradient-to-r from-secondary via-[#faa307] to-[#f48c06]"
			/>

			{/* ---------- DESC --------  */}
			<div className="flex flex-row">
				<div className="flex flex-col ml-4 my-10">
					<h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
						{title}
					</h4>

					<p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
						{type}
					</p>
				</div>
			</div>

			{/* ---------- MODAL ----------  */}
			<ProjectModal
				type={type}
				title={title}
				desc={desc}
				content={content}
				technologies={technologies}
				date={date}
				url={url}
				img={img}
				closeModal={closeModal}
				isOpen={isOpen}
			/>
		</div>
	)
}

export default ProjectCard
