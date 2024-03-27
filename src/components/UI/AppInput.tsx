type AppInputProps = {
	inputLabel: string
	id: string
	inputType: string
	inputPlacaholder: string
	errorMessage: string
}

export const AppInput = ({
	inputLabel,
	id,
	inputType,
	inputPlacaholder,
	errorMessage,
}: AppInputProps) => {
	return (
		<label className='input-wrapper' htmlFor='{id}'>
			{inputLabel}
			<input
				required
				type={inputType}
				name={id}
				id={id}
				placeholder={inputPlacaholder}
			/>
			<span id='error-message'>{errorMessage}</span>
		</label>
	)
}
