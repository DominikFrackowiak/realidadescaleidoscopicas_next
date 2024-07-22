import Image from 'next/image'

import Heading from '../atoms/Heading'
import Row from '../atoms/Row'
import Stack from '../atoms/Stack'
import Wrapper from '../atoms/Wrapper'
import SplitScreen from './SplitScreen'

const stages = [
	{
		title: 'Cuidados',
		imgSrc: '/assets/images/cuidados.png',
	},
	{
		title: 'Educación',
		imgSrc: '/assets/images/educacion.png',
	},
	{
		title: 'Sanidad',
		imgSrc: '/assets/images/sanidad.png',
	},
	{
		title: 'Cultura',
		imgSrc: '/assets/images/cultura.png',
	},
	{
		title: 'Vivienda',
		imgSrc: '/assets/images/vivienda.png',
	},
]

function LeftColumn() {
	return (
		<Image
			src={'/assets/images/mapa.svg'}
			width={2000}
			height={1457.5}
			alt='mapa'
			className='w-[47%]'
		/>
	)
}

function RightColumn() {
	return (
		<Stack classes='w-[47%]'>
			<p className='text-[#364ec6] w-[100%] text-lg'>
				En el mapa se indican las 5 etapas que corresponden a los ámbitos
				trabajados en el proyecto: cuidados, educación, sanidad, cultura
				participada, vivienda. En cada etapa encontrarás un código QR que te
				permitirá acceder a los audios relacionados con el ámbito de referencia.
				Después de haber escuchado los audios podrás compartir tu punto de vista
				sobre la temática abordada indicando cómo este ámbito de vida podría ser
				más inclusivo. Tus palabras se incluirán dentro del caleidoscopio, que
				se irá moviendo y alimentando por los distintos puntos de vistas
				compartidos por cada una de las personas participantes.
			</p>
			<Row variant='section' classes='w-[45%]'>
				{stages.map(stage => (
					<Row key={stage.title} classes='w-[33%] wrap gap-20 border' >
						<Image src={stage.imgSrc} alt='icon' height={50} width={50} className='w-[20px]'/>
						<p>{stage.title}</p>
					</Row>
				))}
			</Row>
		</Stack>
	)
}

export default function Participate() {
	return (
		<article className='flex flex-col min-h-screen justify-around items-center'>
			<Wrapper>
				<Heading
					headingType={'h2'}
					className='font-tavares text-6xl text-center text-[#fc3951]'
				>
					<span className='spanish'>!</span>Participa en Yincana<span>!</span>
				</Heading>
				<Heading
					headingType={'h3'}
					className=' text-[#364ec6] text-3xl text-center font-bold'
				>
					forma parte de la construcción de nuevas narrativas decoloniales
				</Heading>
				<SplitScreen
					Left={LeftColumn}
					Right={RightColumn}
					classes={'justify-between'}
				/>
			</Wrapper>
		</article>
	)
}
