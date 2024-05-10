// REACT STATE
import { useState } from "react"
// DATA
import { socialMedia } from "../../constants"
// EMAILJS LIBRARY
import emailjs from "@emailjs/browser"
// COMPONENT
import EmailModal from "./EmailModal"

const EmailForm = () => {
	// USESTATE FOR MODAL
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}
	function openModal() {
		setIsOpen(true)
	}

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const [popupMessage, setPopupMessage] = useState(null)

	// HANDLE SUBMIT
	const handleSubmit = (e) => {
		e.preventDefault()

		//EmailJS Service ID, template ID, public Key
		const serviceId = import.meta.env.VITE_SERVICE_ID
		const templateId = import.meta.env.VITE_TEMPLATE_ID
		const publicKey = import.meta.env.VITE_PUBLIC_KEY

		// Object contains template params
		const templateParams = {
			from_name: name,
			from_email: email,
			to_name: "Jayson Romero",
			message: message,
		}

		try {
			// if fields are incomplete
			if (!name || !email || !message) {
				setPopupMessage(false)
			} else {
				// if fields are all complete
				emailjs
					.send(serviceId, templateId, templateParams, publicKey)
					.then((response) => {
						console.log("email sent successfully", response)
						setName("")
						setEmail("")
						setMessage("")
					})
					.catch((error) => {
						console.log("Having a problem with sending an email", error)
					})
				setPopupMessage(true)
			}
			openModal()
		} catch (error) {
			console.log("Having a problem with sending an email", error)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
			<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				{/* -------NAME FIELD ---------- */}
				<div className="sm:col-span-2">
					<label
						htmlFor="company"
						className="block text-sm font-semibold leading-6 text-white"
					>
						Your Name
					</label>
					<div className="mt-2.5">
						<input
							type="text"
							name="company"
							id="company"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				{/*---------- EMAIL FIELD ------------- */}
				<div className="sm:col-span-2">
					<label
						htmlFor="email"
						className="block text-sm font-semibold leading-6 text-white"
					>
						Your Email Address
					</label>
					<div className="mt-2.5">
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				{/* ------MESSAGE FIELD--------  */}
				<div className="sm:col-span-2">
					<label
						htmlFor="message"
						className="block text-sm font-semibold leading-6 text-white"
					>
						How Can I Help You?
					</label>
					<div className="mt-2.5">
						<textarea
							name="message"
							id="message"
							rows={4}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							defaultValue={""}
						/>
					</div>
				</div>
			</div>

			{/* ------SOCIAL MEDIA ICON--------  */}
			<div className="text-sm leading-6 text-white items-center flex gap-5 items-start mt-2 ">
				You can also contact me through:{" "}
				<div className="flex flex-row md:mt-0 gap-1 ">
					{socialMedia.map((media, index) => (
						<a
							key={media.id}
							href={media.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-lg font-semibold leading-6  bg-dimWhite text-gray-500 hover:text-black  p-2 rounded-full"
						>
							{media.icon}
						</a>
					))}
				</div>
			</div>

			{/* --------SUBMIT BUTTON--------  */}
			<div className="mt-10">
				<button
					type="submit"
					className="block w-full px-3.5 py-2.5 text-sm bg-blue-gradient font-poppins  text-[18px] text-primary outline-none text-sm font-semibold  rounded-[10px]"
				>
					Send
				</button>
			</div>

			{/* --------ALERT MODAL-------  */}
			<EmailModal
				closeModal={closeModal}
				isOpen={isOpen}
				popupMessage={popupMessage}
			/>
		</form>
	)
}

export default EmailForm
