// HEADLESS UI
import { Dialog, Transition } from "@headlessui/react"
// COMPONENT
import Button from "./Button"
// REACT COMPONENT
import { Fragment } from "react"

const AboutMeModal = ({ isOpen, closeModal, title, desc, content }) => (
	<>
		{/* -------- MODAL --------  */}
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-[1100px] transform overflow-hidden rounded-2xl bg-black-gradient p-6 text-left align-middle shadow-xl transition-all font-poppins">
								{/* ----------- CONTENT--------------   */}
								<div className="bg-black-gradient py-24 sm:py-32">
									<div className="mx-auto max-w-7xl px-6 lg:px-8">
										{/* ------- TITLE AND DESC.----------*/}
										<div className="mx-auto max-w-2xl lg:mx-0">
											<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
												{title}
											</h2>
											<p className={`mt-2 text-lg leading-8 text-dimWhite `}>
												{desc}
											</p>
										</div>

										{/* --------------DATA------------   */}
										<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
											{content &&
												content.map((post) => (
													<article
														key={post.id}
														className={`flex max-w-xl flex-col items-start   ${
															post.description
																? "justify-between"
																: "justify-start"
														} `}
													>
														{/* IMAGE FOR CERTIFICATE  */}
														{post.img && (
															<img
																src={post.img}
																alt=""
																className=" w-full bg-dimWhite "
															/>
														)}

														<div className="flex items-center gap-x-4 text-xs">
															{/* DATE FOR WORK EXPERIENCE AND CERTIFICATE  */}
															<time
																dateTime={post.datetime}
																className="text-dimWhite"
															>
																{post.date}
															</time>
															{/* type of certificate  */}
															<p
																className={`relative z-10 rounded-full bg-dimWhite px-3 py-1.5 my-5 font-medium text-primary   ${
																	post.category.title ? "" : "hidden"
																}`}
															>
																{post.category.title}
															</p>
														</div>

														<div className="group relative">
															{/* FEATURE TITLE  */}
															<h3 className="mt-3 text-lg font-semibold leading-6 text-white ">
																{post.title}
															</h3>

															{/* FEATURE DESC  */}
															{post.description && (
																<p
																	className={`mt-5 line-clamp-4 text-sm leading-6 text-dimWhite `}
																>
																	{post.description}
																</p>
															)}
														</div>

														{/* FEATURE PROVIDER OR SOURCE  */}
														{post.author.map((tech) => (
															<div
																className="relative mt-8 flex items-center gap-x-4"
																key={tech.name}
															>
																{/* logo  */}
																<img
																	src={tech.imageUrl}
																	alt="logo"
																	className="h-10 w-10 rounded-full bg-gray-50"
																/>

																{/*PROVIDER/SOURCE NAME  */}
																<div className="text-sm leading-6">
																	<p className="font-semibold text-white">
																		{tech.href ? (
																			<a
																				href={tech.href}
																				target="_blank"
																				rel="noopener noreferrer"
																			>
																				<span className="absolute inset-0" />
																				{tech.name}
																			</a>
																		) : (
																			<span>{tech.name}</span>
																		)}
																	</p>
																	<p className="text-dimWhite">{tech.role}</p>
																</div>
															</div>
														))}
													</article>
												))}
										</div>

										{/* CLOSE BUTTON */}
										<Button
											styles="inline-flex justify-center text-sm mt-16"
											name="Got it, thanks!"
											onclick={closeModal}
										/>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	</>
)

export default AboutMeModal
