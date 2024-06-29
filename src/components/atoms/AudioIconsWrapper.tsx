interface Props {
	children: React.ReactNode
}

export default function AudioIconsWrapper({ children }: Props): JSX.Element {
	return <div className='relative h-[70px] w-16'>{children}</div>
}
