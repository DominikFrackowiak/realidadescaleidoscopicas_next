export default function Navbar() {
	return (
		<nav className='nav nav-desktop'>
			<ul className='nav-desktop__ul'>
				<li className='nav-desktop__li'>
					<a className='nav-desktop__link nav-link' href='#inicio'>
						Inicio
					</a>
				</li>
				<li className='nav-desktop__li'>
					<a className='nav-desktop__link nav-link' href='#mapa'>
						Mapa Yincana
					</a>
				</li>
				<li className='nav-desktop__li'>
					<a
						className='nav-desktop__link nav-link link-to-the-cloud'
						href='#nube'
					>
						Nube de palabras
					</a>
				</li>
				<li className='nav-desktop__li'>
					<a
						href='#cuidados'
						className='nav-desktop__link etapas cuidados nav-link'
					>
						Etapas
					</a>

					<ul className=' etapas__ul'>
						<li className='etapas__li'>
							<a className='etapas__link active nav-link' href='#cuidados'>
								Cuidados
							</a>
						</li>
						<li className='etapas__li'>
							<a className='etapas__link nav-link' href='#educacion'>
								Educación
							</a>
						</li>
						<li className='etapas__li'>
							<a className='etapas__link nav-link' href='#sanidad'>
								Sanidad
							</a>
						</li>
						<li className='etapas__li'>
							<a className='etapas__link nav-link' href='#cultura'>
								Cultura
							</a>
						</li>
						<li className='etapas__li'>
							<a className='etapas__link nav-link' href='#vivienda'>
								Vivienda
							</a>
						</li>
						<li className='etapas__li'>
							<a className='etapas__link nav-link' href='#opinion'>
								¿Y tú qué opinas?
							</a>
						</li>
					</ul>
				</li>
				<li className='nav-desktop__li'>
					<a className='nav-desktop__link nav-link' href='#nosotros'>
						Quiénes somos
					</a>
				</li>
				<li className='nav-desktop__li'>
					<a className='nav-desktop__link nav-link' href='#contacto'>
						Contacto
					</a>
				</li>
			</ul>
		</nav>
	)
}
