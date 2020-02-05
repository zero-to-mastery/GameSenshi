export const {
	justify_content_start,
	justify_content_end,
	justify_content_center,
	justify_content_between,
	justify_content_around,
} = ['start', 'end', 'center', 'between', 'around'].reduce(
	(acc, positioning) => {
		acc['justify_content_' + positioning] =
			'justify-content: flex-' + positioning + ';'
		return acc
	},
	{}
)
