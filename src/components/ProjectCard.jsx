// COMPONENT
import ProjectModal from "./ProjectModal"
// REACT COMPONENT
import { useState } from "react"

import client from "../client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)
function urlFor(source) {
	return builder.image(source)
}

const ProjectCard = ({
	slug,
	name,
	projectType,
	details,
	technologies,
	date,
	url,
	image,
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
				src={urlFor(image).url()}
				alt="double_qoutes"
				className="w-full  rounded-[20px] object-contain bg-gradient-to-r from-secondary via-[#faa307] to-[#f48c06]"
			/>

			{/* ---------- DESC --------  */}
			<div className="flex flex-row">
				<div className="flex flex-col ml-4 my-10">
					<h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
						{name}
					</h4>

					<p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-2">
						{projectType}
					</p>
					<div className="flex">
						{technologies &&
							technologies.map((tech) => (
								<img
									key={tech.name}
									src={urlFor(tech.image).url()}
									alt="tech logo"
									className="w-[25px] h-[25px]"
								/>
							))}
					</div>
				</div>
			</div>

			{/* ---------- MODAL ----------  */}
			<ProjectModal
				type={projectType}
				title={name}
				desc={details}
				content={details}
				technologies={technologies}
				date={date}
				url={url}
				img={image}
				closeModal={closeModal}
				isOpen={isOpen}
			/>
		</div>
	)
}

export default ProjectCard
