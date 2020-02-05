const NAME = 'name'
const ABB = 'abb'

export const {
	justify_content_start,
	justify_content_end,
	justify_content_center,
	justify_content_between,
	justify_content_around,
} = [
	{ [ABB]: 'start', [NAME]: 'flex-start' },
	{ [ABB]: 'end', [NAME]: 'flex-end' },
	{ [ABB]: 'center', [NAME]: 'center' },
	{ [ABB]: 'between', [NAME]: 'space-between' },
	{ [ABB]: 'around', [NAME]: 'space-around' },
].reduce((acc, positioning) => {
	acc['justify_content_' + positioning[ABB]] =
		'justify-content:' + positioning[NAME] + ';'
	return acc
}, {})
