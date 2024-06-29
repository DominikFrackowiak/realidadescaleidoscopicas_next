interface Props {
	children: React.ReactNode
}

export default function Wrapper({ children }: Props): JSX.Element {
	return (
		<div className='flex flex-col justify-around max-w-screen-xl min-h-screen py-40 px-10 gap-10'>
			{children}
		</div>
	)
}
