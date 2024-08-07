interface DescriptionProps {
	text: string
	className: string
	color: string
}

export default function Description({
	text,
	className,
	color,
}: DescriptionProps) {
	return (
		<p className={className} style={{ color: color }}>
			{text}
		</p>
	)
}
