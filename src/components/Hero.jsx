// IMAGE
import { hero_img } from "../assets"
// DATA
import { tech } from "../constants"
// REACT ICON
import { PiHandWavingFill } from "react-icons/pi"

const Hero = () => {
	return (
		<section className="py-6 xl:py-16 ">
			<div id="home" className="flex md:flex-row flex-col">
				<div
					className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
				>
					{/*------- HEADER EYEBROW -------- */}
					<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
						<PiHandWavingFill className="w-[28px] h-[28px] text-secondary" />
						<p
							className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2`}
						>
							<span className="text-white">Hello, </span>
							I'm
							<span className="text-white"> Jayson Romero</span>
						</p>
					</div>

					{/* ---------HEADER----------  */}
					<div className="flex flex-row justify-between items-center w-full ">
						<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px]">
							Passionate
							<br className="sm:block " />{" "}
							<span className="text-gradient ss:text-[72px]">
								Web Developer
							</span>{" "}
						</h1>
					</div>
					<h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
						From Philippines
					</h1>

					<p
						className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
					>
						{" "}
						Transforming my creativity and knowledge into responsive websites
						from scratch to modern user-friendly web experiences has been my
						passion.
					</p>
				</div>

				<div
					className={`flex-1 flex flex justify-center items-center md:my-0 my-10 relative`}
				>
					<img
						src={hero_img}
						alt="HERO IMAGE"
						className="w-[100%] h-[100%] relative z-[5] hero__img"
					/>

					<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
					<div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
					<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
				</div>
			</div>

			{/* ----------TECT STACK--------------*/}
			<div className="flex flex-wrap gap-12 items-center justify-start lg:my-20 xl:px-0 sm:px-16 px-6">
				<h1 className="text-white font-poppins text-[18px] font-bold border-b-2 lg:border-b-0  lg:border-r-2 border-secondary pb-5 lg:pr-10 lg:pb-0">
					Tech Stack
				</h1>

				<ul className="flex flex-wrap gap-10">
					{tech.map((stack) => (
						<li key={stack.id} className="text-center">
							<img className="w-[60px] " src={stack.img} alt="" />
							<p className="font-poppins font-normal text-dimWhite text-[14px]">
								{stack.id}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Hero
