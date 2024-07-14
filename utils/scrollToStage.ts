const scrollToStage = (category: string) => {
	const element = document.getElementById(category)
	if (element) {
		setTimeout(() => {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, 200)
	}
}
export default scrollToStage
