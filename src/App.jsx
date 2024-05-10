import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import CTA from "./components/CTA"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"

function App() {
	return (
		<div className="bg-primary w-full overflow-hidden">
			{/* NAVBAR  */}
			<div className="paddingX sm:px-16 px-6 flex justify-center items-center">
				<div className="xl:max-w-[1280px] w-full">
					<Navbar />
				</div>
			</div>

			{/* HERO SECTION  */}

			<div className="bg-primary flex justify-center items-start">
				<div className="xl:max-w-[1280px] w-full">
					<Hero />
				</div>
			</div>

			{/* OTHER SECTIONS  */}
			<div className="bg-primary flex justify-center items-start sm:px-16 px-6">
				<div className="xl:max-w-[1280px] w-full">
					<Projects />
					<AboutMe />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default App
