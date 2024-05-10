// REACT COMPONENT
import { Fragment } from "react"
// HEADLESS UI
import { Dialog, Transition } from "@headlessui/react"
// REACT ICONS
import { BiSolidMessageCheck, BiSolidMessageAltX } from "react-icons/bi"

const EmailModal = ({ closeModal, isOpen, popupMessage }) => {
	return (
		// ------ MODAL -----
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
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								{/* ------- CONTENT -------  */}
								<div className="bg-dimWhite px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										{/* --------ICON---------  */}
										<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
											{popupMessage ? (
												<BiSolidMessageCheck className="h-6 w-6 text-green-600" />
											) : (
												<BiSolidMessageAltX className="h-6 w-6 text-red-600" />
											)}
										</div>

										<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
											{/* -------TITLE--------- */}
											<Dialog.Title
												as="h3"
												className={`${
													popupMessage ? "text-green-600 " : "text-red-600 "
												}  font-bold leading-6 `}
											>
												{popupMessage
													? "Successfully Submitted"
													: "Error Message"}
											</Dialog.Title>
											{/* -------desc--------- */}
											<div className="mt-5">
												<p className="text-lg text-primary font-semibold ">
													{popupMessage
														? "Message has been Submited."
														: " Kindly Complete all Fields."}
												</p>
											</div>
										</div>
									</div>
								</div>
								{/* -----BUTTON---------  */}
								<div className="bg-dimWhite px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className={`inline-flex w-full justify-center rounded-md ${
											popupMessage
												? "bg-green-600  text-primary"
												: "bg-red-700 text-white"
										}  px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto`}
										onClick={() => closeModal()}
									>
										Got It! Thank you
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default EmailModal
