export default function renderHtmlContent(input: string, classes: string): JSX.Element {
	const regex = /<[^>]*>/

	if (regex.test(input)) {
		return <p key={input} className={classes} dangerouslySetInnerHTML={{ __html: input }} />
	} else {
		return <p key={input} className={classes}>{input}</p>
	}
}
