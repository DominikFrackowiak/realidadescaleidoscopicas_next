interface Props {
	children: React.ReactNode
}

export default function AudioIconsWrapper({ children }: Props): JSX.Element {
	return <div className='relative h-[90px] w-20' >{children}</div>
}
