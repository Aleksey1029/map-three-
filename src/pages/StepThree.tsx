import { Option2 } from '../components/Option'
import { Heading } from '../components/Typography/Heading'
import { AppButton } from '../components/UI/AppButton'

const OptionData = [
	{
		labelText: 'Веселый',
		id: 'variant-1',
		img: './img/laugh.png',
		altText: 'laugh',
	},
	{
		labelText: 'Красивый',
		id: 'variant-2',
		img: './img/hearts.png',
		altText: 'hearts',
	},
	{
		labelText: 'Строгий',
		id: 'variant-3',
		img: './img/smirk.png',
		altText: 'smirk',
	},
	{
		labelText: 'Пугливый',
		id: 'variant-4',
		img: './img/fright.png',
		altText: 'fright',
	},
]

const StepThree = () => {
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
							<div className='indicator__unit indicator__unit-3'></div>
							<div className='indicator__unit indicator__unit-4'></div>
						</div>
					</div>
					<div className='question'>
						<Heading headingType='h2' headingText='3. Какой вы?' />
						<ul className='emoji-variants'>
							{OptionData &&
								OptionData.map(elem => (
									<Option2
										labelText={elem.labelText}
										inputType={'radio'}
										id={elem.id}
										img={elem.img}
										name={elem.id}
										altText={elem.altText}
									/>
								))}

							{/* <Option
								labelText='Веселый'
								inputType='radio'
								name='variant-1'
								id='variant-1'
								img='./img/laugh.png'
								alt='laugh'
							/>
							<Option
								labelText='Красивый'
								inputType='radio'
								name='variant-2'
								id='variant-2'
								img='./img/hearts.png'
								alt='hearts'
							/>
							<Option
								labelText='Строгий'
								inputType='radio'
								name='variant-3'
								id='variant-3'
								img='./img/smirk.png'
								alt='smirk'
							/>
							<Option
								labelText='Пугливый'
								inputType='radio'
								name='variant-4'
								id='variant-4'
								img='./img/fright.png'
								alt='fright'
							/> */}
						</ul>
						<AppButton buttonText='Далее' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StepThree
