// DATA
import { projects } from "../constants"

// COMPONENT
import ProjectCard from "./ProjectCard"

import client from "../client.js"
import { useEffect, useState } from "react"

const Projects = () => {
	const [allPostsData, setAllPosts] = useState(null)

	useEffect(() => {
		client
			.fetch(
				`*[_type == "project"] | order(_createdAt desc) {
    "slug": slug.current ,
	name,
	projectType,
	details,
	technologies[]->{name, image},
	date,
	url,
	image,
}`
			)
			.then((data) => setAllPosts(data))
			.catch(console.error)
	}, [])

	return (
		<section
			id="projects"
			className={`flex justify-center items-center sm:py-16 py-6 flex-col relative`}
		>
			{/*---- COLOR ACCENT TO RIGHT SIDE ----- */}
			<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

			{/* ------------ HEADER --------------  */}
			<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
				<h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
					Some of my <br className="sm:block hidden" /> Previous Projects
				</h1>
				<div className="w-full md:mt-0 mt-6">
					<p
						className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]`}
					>
						Do you have any projects in mind? <br className="sm:block hidden" />{" "}
						Let's make it happen.
					</p>
				</div>
			</div>

			{/* ------------- PROJECT CARDS ------------------  */}
			<div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
				{allPostsData &&
					allPostsData.map((post) => <ProjectCard key={post.slug} {...post} />)}
			</div>
		</section>
	)
}

export default Projects
