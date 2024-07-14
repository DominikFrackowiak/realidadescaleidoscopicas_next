import React from 'react'

interface Props<T extends React.ElementType = 'div'> {
	variant?: T
	children: React.ReactNode
	classes: string
}

export default function Stack<T extends React.ElementType = 'div'>({
	variant,
	children,
	classes,
	...restProps
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
	const Component = variant || 'div'
	return (
		<Component className={`flex flex-col ${classes}`} {...restProps}>
			{children}
		</Component>
	)
}
