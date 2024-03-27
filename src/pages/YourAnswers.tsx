import { Option } from '../components/Option'
import { Heading2 } from '../components/Typography/Heading'
import { AppButton } from '../components/UI/AppButton'
import { Heading } from '../components/Typography/Heading'
import { Heading3 } from '../components/Typography/Heading'

export const YourAnswers = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
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
						<div className='indicator__unit indicator__unit-4 _active'></div>
					</div>
				</div>
				<div className='welcome'>
					<Heading headingText='Ваши ответы' />
					{/* <h1>Ваши ответы</h1> */}
					<div className='question'>
						<ul>
							<li>
								<Heading3 headingText3='1. Где вы узнали про нашу школу?' />
								{/* <h3>1. Где вы узнали про нашу школу?</h3> */}
								<span>ответ</span>
							</li>
							<li>
								<Heading3 headingText3='2. На какой курс вы хотите пойти?' />
								{/* <h3>2. На какой курс вы хотите пойти?</h3> */}
								<span>ответ</span>
							</li>
							<li>
								<Heading3 headingText3='3. Какой вы?' />
								{/* <h3>3. Какой вы?</h3> */}
								<span>ответ</span>
							</li>
							<li>
								<Heading3 headingText3='4. Хотите ли вы стать частью семьи Tehnikum?' />
								{/* <h3>4. Хотите ли вы стать частью семьи Tehnikum?</h3> */}
								<span>ответ</span>
							</li>
						</ul>
						<AppButton buttonText='Подтвердить' />
						{/* <button type='button' disabled id='next-btn'>
							Подтвердить
						</button> */}
					</div>
				</div>
			</div>
		</div>
	)
}
