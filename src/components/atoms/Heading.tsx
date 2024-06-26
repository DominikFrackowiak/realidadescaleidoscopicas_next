type HeadingType = 'h1' | 'h2' | 'h3' | 'h4'

interface Props {
	headingType: HeadingType
	children: React.ReactNode
  className: string
}

export default function Heading({ headingType, children, className }: Props): JSX.Element {
	const HeadingTag = headingType as keyof JSX.IntrinsicElements
	return <HeadingTag className={className}>{children}</HeadingTag>
}
