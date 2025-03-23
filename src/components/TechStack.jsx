// DATA
import { tech } from "../constants"
//SANITY
import client from "../client"
import imageUrlBuilder from "@sanity/image-url"
import { useEffect, useState } from "react"

const builder = imageUrlBuilder(client)
function urlFor(source) {
	return builder.image(source)
}

const TechStack = () => {
	const [allFeaturedTechStack, setallFeaturedTechStack] = useState(null)

	useEffect(() => {
		client
			.fetch(`*[isFeatured == true] | order(_createdAt asc)  { name, image}`)
			.then((data) => setallFeaturedTechStack(data))
			.catch(console.error)
	}, [])

	return (
		<div className="flex flex-wrap gap-12 items-center justify-start lg:my-20 xl:px-0 sm:px-16 px-6">
			<h1 className="text-white font-poppins text-[18px] font-bold border-b-2 lg:border-b-0  lg:border-r-2 border-secondary pb-5 lg:pr-10 lg:pb-0">
				Tech Stack
			</h1>

			<ul className="flex flex-wrap gap-10">
				{allFeaturedTechStack &&
					allFeaturedTechStack.map((stack) => (
						<li key={stack.name} className="text-center">
							<img
								className="w-[60px] "
								src={urlFor(stack.image).url()}
								alt=""
							/>
							<p className="font-poppins font-normal text-dimWhite text-[14px]">
								{stack.name}
							</p>
						</li>
					))}
			</ul>
		</div>
	)
}

export default TechStack
