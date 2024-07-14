import Wrapper from '../atoms/Wrapper'
import Heading from '../atoms/Heading'
import SplitScreen from './SplitScreen'
import Stack from '../atoms/Stack'

function LeftColumn() {
	return (
		<p className='text-white w-[45%] text-lg'>
			Tomar conciencia de los privilegios y opresiones relacionados con el
			cuerpo y el lugar que nos ha tocado habitar nos hace entender que las
			opresiones no se desarrollan solo en las relaciones entre personas
			particulares, sino que se configuran en las relaciones de poder ínsitas en
			las estructuras sociales. Pero, ¿cómo podemos participar en la
			construcción de un derecho a la ciudad como un espacio en el que todas las
			identidades sean respetadas y puedan convivir valorando sus diferencias en
			lugar de ser eliminadas, invisibilizadas y reprimidas?
		</p>
	)
}

function RightColumn() {
	return (
		<p className='text-white w-[45%] text-lg'>
			El presente proyecto busca facilitar la construcción de narrativas y
			espacios de convivencia libres de prácticas excluyentes, clasistas y
			racistas y propone la construcción de un caleidoscopio, metáfora de la
			construcción participativa de un conocimiento crítico que, rechazando las
			categorías cerradas del razonamiento binario, se construya desde la
			intersección de distintas experiencias, condiciones, y caminos de vida.
		</p>
	)
}

export default function MoreInfo() {
	return (
		<section className='flex justify-center h-[100vh] bg-[#2e3192]' id='more'>
			<Wrapper>
				<Stack classes='gap-[20px]'>
					<Heading
						headingType={'h2'}
						className=' text-white font-tavares text-6xl text-center'
					>
						<span className='spanish'>?</span>Y tú encajas<span>?</span>
					</Heading>
					<Heading
						headingType={'h3'}
						className=' text-white text-2xl text-center font-bold'
					>
						Des(iguales)
					</Heading>
					<Heading
						headingType={'h3'}
						className=' text-white text-2xl text-center'
					>
						Una mirada caleidoscópica
					</Heading>
				</Stack>
				<SplitScreen
					Left={LeftColumn}
					Right={RightColumn}
					classes={'justify-between'}
				/>
			</Wrapper>
		</section>
	)
}
