// DATA
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
	return (
		<section className="flex justify-center items-center sm:py-16 py-6 flex-col">
			<div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
				<div className="flex-1 flex flex-col justify-start mr-10">
					{/* ------ LOGO ------  */}
					{/* <img
						src={logo}
						alt="hoobank"
						className="w-[266px] h-[72px] object-contain"
					/> */}
					<h1 className="text-white font-poppins text-[42px] font-bold">
						Jay<span className="text-gradient">son.</span>
					</h1>

					{/* ------- SHORT DESC. ------- */}
					<p
						className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]`}
					>
						Passionate Web Developer From Philippines
					</p>
				</div>

				{/* ---- FOOTER LINKS ----  */}
				<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
					{footerLinks.map((footerLink) => (
						<div
							key={footerLink.id}
							className="flex flex-col ss:my-0 my-4 min-w-[150px]"
						>
							{/* ---TITLE ---  */}
							<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
								{footerLink.title}
							</h4>
							<ul className="list-none mt-4">
								{footerLink.links.map((link, index) => (
									// ---- LINKS ---
									<li
										key={link.name}
										className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
											index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
										}`}
									>
										<a
											href={link.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{/* ----- FOOTER ALRIGHTS ----  */}
			<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
				<p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
					2024 Jayson. All Rigths Reserved.
				</p>

				{/* ------ SOCIAL MEDIA -----   */}
				<div className="flex flex-row justify-center md:mt-0 mt-6">
					{socialMedia.map((social, index) => (
						<a
							key={social.id}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							className=" `text-[21px] text-[21px]    text-dimWhite hover:text-white  p-2 "
						>
							{social.icon}
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Footer
