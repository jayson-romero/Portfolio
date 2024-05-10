// HEADLESS UI
import { Dialog, Transition } from "@headlessui/react"
// REACT COMPONENT
import { Fragment } from "react"
// COMPONENT
import Button from "../components/Button"

const ProjectModal = ({
	closeModal,
	type,
	title,
	desc,
	content,
	technologies,
	url,
	img,
	isOpen,
}) => {
	return (
		<>
			{/* ------ MODAL ------------- */}
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
								<Dialog.Panel className="max-w-[1100px] transform overflow-hidden rounded-2xl bg-black-gradient p-6 text-left align-middle shadow-xl transition-all">
									{/* ----------CONTENT---------  */}
									<div className="isolate bg-black-gradient px-6 py-24 sm:py-32 lg:px-8">
										<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
											{/* ------TITLE, TYPE, SHORT DESC.----------  */}
											<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
												<div className="lg:pr-4 font-poppins">
													<div className="lg:max-w-lg">
														<p className=" font-semibold leading-7 text-secondary">
															{type}
														</p>
														<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
															{title}
														</h1>
														<p className="mt-6 text-xl leading-8 text-dimWhite">
															{desc}
														</p>
													</div>
												</div>
											</div>
											{/* ---------- IMAGE ---------  */}
											<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
												<img
													className="w-[48rem] max-w-none rounded-xl bg-secondary shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
													src={img}
													alt=""
												/>
											</div>
											<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
												<div className="lg:pr-4 font-poppins">
													<div className="max-w-xl text-base leading-7 text-dimWhite lg:max-w-lg">
														<p>{content}</p>
														<ul
															role="list"
															className="mt-8 space-y-4 text-dimWhite"
														>
															{/* ---LIST OF TECHNOLOGIES---  */}
															<li className="flex gap-x-3">
																<span>
																	<strong className="font-semibold text-white">
																		Technologies:
																	</strong>{" "}
																	{technologies}
																</span>
															</li>

															{/* ----URL-----  */}
															<li className="flex gap-x-3 items-center">
																<strong className="font-semibold text-white">
																	URL:
																</strong>

																<button className="py-2 px-4 bg-blue-gradient font-poppins text-[13px] text-primary outline-none rounded-[10px] inline-flex justify-center ">
																	<a
																		href={url}
																		target="_blank"
																		rel="noopener noreferrer"
																	>
																		Live Demo
																	</a>
																</button>
															</li>
														</ul>

														{/* ------ FOOTER DESCRIPTION ---------  */}
														<h2 className="mt-16 text-2xl font-bold tracking-tight text-white ">
															Have any projects in mind? <br /> Let's make it
															happen.
														</h2>
														<p className="mt-6">
															Excited about a web project? Let's make it happen!
															I'm here to turn your ideas into reality. From
															concept to creation, let's collaborate and bring
															your vision to life.
														</p>

														{/* ----- BUTTON TO EXIT MODAL---------  */}
														<Button
															styles="inline-flex justify-center text-sm mt-16"
															name="Got it, thanks!"
															onclick={closeModal}
														/>
													</div>
												</div>
											</div>
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
}

export default ProjectModal
