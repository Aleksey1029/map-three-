type OptionProps = {
	labelText: string,
	inputType: string,
	id: string,
}

type Option2Props = {
	labelText: string,
	inputType: string,
	id: string,
	img: string,
	name: string,
	altText: string,
}


export const Option = ({ labelText, inputType, id,}: OptionProps) => {
	return (
		<li className='variant-wrapper'>
			<input required type={inputType} name={id} id={id} />
			<label htmlFor={id}>
				{labelText}
			</label>
		</li>
	)
}

export const Option2 = ({ labelText, inputType, id, img, altText }: Option2Props) => {
	return (
		<li className='variant-wrapper'>
			<input required type={inputType} name={id} id={id} />
			<label htmlFor={id}>
				<img src={img} alt={altText} />
				{labelText}
			</label>
		</li>
	)
}
