import { Option } from '../components/Option'
import { Heading2 } from '../components/Typography/Heading'
import { AppButton } from '../components/UI/AppButton'

const StepFour = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='emoji-quiz'>
					<div className='indicator'>
						<div className='indicator__text'>
							<span className='indicator__description'>
								Скидка за прохождение опроса:
							</span>
							<span className='indicator__value'>15%</span>
						</div>
						<div className='indicator__progressbar'>
							<div className='indicator__unit indicator__unit-1 _active'></div>
							<div className='indicator__unit indicator__unit-2 _active'></div>
							<div className='indicator__unit indicator__unit-3 _active'></div>
							<div className='indicator__unit indicator__unit-4'></div>
						</div>
					</div>
					<div className='question'>
						<Heading2 headingText2='4. Хотите ли вы стать частью семьи Tehnikum?' />
						<ul className='level-variants'>
							<Option
								labelText='1'
								inputType='radio'
								name='variant-1'
								id='variant-1'
							/>
							<Option
								labelText='2'
								inputType='radio'
								name='variant-2'
								id='variant-2'
							/>
							<Option
								labelText='3'
								inputType='radio'
								name='variant-3'
								id='variant-3'
							/>
							<Option
								labelText='4'
								inputType='radio'
								name='variant-4'
								id='variant-4'
							/>
							<Option
								labelText='5'
								inputType='radio'
								name='variant-5'
								id='variant-5'
							/>
						</ul>
						<AppButton buttonText='Далее'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StepFour
