interface Props {
	children: React.ReactNode
}

export default function AudioWrapper({ children }: Props): JSX.Element {
	return (
		<section className='flex max-w-screen-xl justify-around px-10 gap-10'>
			{children}
		</section>
	)
}
