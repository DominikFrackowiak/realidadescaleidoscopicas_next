'use client'

import { useState, useEffect } from 'react'

import ReactWordcloud from '../../../react-wordcloud/dist/index'
// import { db } from './firebase/config'

interface Options {
	colors: ['#fc3951', '#ed0033', '#364ec6', '#2e3192']
	enableTooltip: boolean
	deterministic: boolean
	fontFamily: string
	fontSizes: [20, 70]

	fontStyle: string
	fontWeight: string
	padding: number
	rotations: number
	rotationAngles: [0, 90]
	scale: 'sqrt'
	spiral: 'archimedean'
	transitionDuration: number
}

const options: Options = {
	colors: ['#fc3951', '#ed0033', '#364ec6', '#2e3192'],
	enableTooltip: true,
	deterministic: false,
	fontFamily: 'Galano Grotesque Semibold',
	fontSizes: [20, 70],

	fontStyle: 'normal',
	fontWeight: 'normal',
	padding: 1,
	rotations: 3,
	rotationAngles: [0, 90],
	scale: 'sqrt',
	spiral: 'archimedean',
	transitionDuration: 1000,
}

export default function WordCloud() {
	const [words, setWords] = useState([
		{
			text: 'told',
			value: 64,
		},
		{
			text: 'mistake',
			value: 11,
		},
		{
			text: 'thought',
			value: 16,
		},
		{
			text: 'bad',
			value: 17,
		},
	])

	const [isWindow, setIsWindow] = useState(false)

	useEffect(() => {
		setTimeout(() => setIsWindow(true), 400)
	}, [])
	// const [isPending, setIsPending] = useState(false)
	// const [error, setError] = useState(false)
	// const [isInViewport, setIsInViewport] = useState(null)
	// const [isLinkClicked, setIsLinkClicked] = useState(null)

	// const intersectionObserver = element => {
	// 	const observer = new IntersectionObserver(entries => {
	// 		entries.forEach(entry => {
	// 			if (entry.isIntersecting) {
	// 				setTimeout(() => setIsInViewport(true), 500)
	// 			} else {
	// 				setIsInViewport(false)
	// 			}
	// 		})
	// 	})
	// 	observer.observe(element)
	// }

	// useEffect(() => {
	// 	setIsLinkClicked(false)
	// 	linksToTheCloud.forEach(link =>
	// 		link.addEventListener('click', () => setIsLinkClicked(true))
	// 	)
	// 	db.collection('opinions')
	// 		.orderBy('value', 'desc')
	// 		.limit(15)
	// 		.get()
	// 		.then(snapshot => {
	// 			if (snapshot.empty) {
	// 				setError('Todavía no hay ninguna palabra')
	// 				setIsPending(false)
	// 			} else {
	// 				let results = []
	// 				snapshot.docs.forEach(doc => {
	// 					results.push({ ...doc.data() })
	// 				})
	// 				setWords(results)
	// 				setIsPending(false)
	// 			}
	// 		})
	// 		.catch(err => {
	// 			setError(err.message)
	// 			setIsPending(false)
	// 		})
	// }, [isLinkClicked, isInViewport])

	// useEffect(() => {
	// 	intersectionObserver(htmlElements.wordCloud)

	// 	const unsub = db
	// 		.collection('opinions')
	// 		.orderBy('value', 'desc')
	// 		.limit(15)
	// 		.onSnapshot(
	// 			snapshot => {
	// 				if (snapshot.empty) {
	// 					setError('Todavía no hay ninguna palabra')
	// 					setIsPending(false)
	// 				} else {
	// 					let results = []
	// 					snapshot.docs.forEach(doc => {
	// 						results.push({ ...doc.data() })
	// 					})
	// 					setWords(results)
	// 					setIsPending(false)
	// 				}
	// 			},
	// 			err => {
	// 				setError(err.message)
	// 				setIsPending(false)
	// 			}
	// 		)

	// 	return () => unsub()
	// }, [])

	return (
		<>
			{/* {isPending && <p>Loading...</p>}
			{error && <p>{error.message}</p>} */}
			{words && (
				<div style={{ height: '700px', width: '100vw' }}>
					{typeof window !== 'undefined' && (
						<ReactWordcloud options={options} words={words} />
					)}
				</div>
			)}
		</>
	)
}
