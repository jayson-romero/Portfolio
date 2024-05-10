const Button = ({ styles, name, onclick }) => {
	return (
		<button
			onClick={onclick}
			type="button"
			className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles} `}
		>
			{name}
		</button>
	)
}

export default Button
