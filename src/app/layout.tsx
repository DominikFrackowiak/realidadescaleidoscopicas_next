import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '¿Y tú encajas? (Des)iguales. Una mirada caleidoscópica.',
	description:
		'El proyecto busca facilitar la construcción de narrativas desde un enfoque decolonial e interseccional y espacios libres de prácticas excluyentes y racistas ¡Participa!"',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
