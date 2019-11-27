import React from 'react'
import { CommentWithPagination } from './CommentWithPagination'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
const { ID, NAME, POSTED_TIME, AVATAR, BODY, NUM_COMMENTS } = stopUndefined(
	Exports
)

const comments = [
	{
		[ID]: 1,
		[NAME]: 'Tina Andrew',
		[POSTED_TIME]: '7 minutes ago',
		[AVATAR]: require('assets/img/james.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '243',
	},
	{
		[ID]: 2,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '211',
	},
	{
		[ID]: 3,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '217',
	},
	{
		[ID]: 4,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '192',
	},
	{
		[ID]: 5,
		[NAME]: 'Tina Andrew',
		[POSTED_TIME]: '7 minutes ago',
		[AVATAR]: require('assets/img/james.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '243',
	},
	{
		[ID]: 6,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '211',
	},
	{
		[ID]: 7,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '217',
	},
	{
		[ID]: 8,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '192',
	},
	{
		[ID]: 9,
		[NAME]: 'Tina Andrew',
		[POSTED_TIME]: '7 minutes ago',
		[AVATAR]: require('assets/img/james.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '243',
	},
	{
		[ID]: 10,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '211',
	},
	{
		[ID]: 11,
		[NAME]: 'Tina Andrew',
		[POSTED_TIME]: '7 minutes ago',
		[AVATAR]: require('assets/img/james.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '243',
	},
	{
		[ID]: 12,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '211',
	},
	{
		[ID]: 13,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '217',
	},
	{
		[ID]: 14,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '192',
	},
	{
		[ID]: 15,
		[NAME]: 'Tina Andrew',
		[POSTED_TIME]: '7 minutes ago',
		[AVATAR]: require('assets/img/james.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '243',
	},
	{
		[ID]: 16,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '211',
	},
	{
		[ID]: 17,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '217',
	},
	{
		[ID]: 18,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '192',
	},
	{
		[ID]: 19,
		[NAME]: 'Tina Andrew',
		[POSTED_TIME]: '7 minutes ago',
		[AVATAR]: require('assets/img/james.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '243',
	},
	{
		[ID]: 20,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '211',
	},
	{
		[ID]: 21,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '217',
	},
	{
		[ID]: 22,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '192',
	},
	{
		[ID]: 23,
		[NAME]: 'Tina Andrew',
		[POSTED_TIME]: '7 minutes ago',
		[AVATAR]: require('assets/img/james.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '243',
	},
	{
		[ID]: 24,
		[NAME]: 'John Camber',
		[POSTED_TIME]: 'Yesterday',
		[AVATAR]: require('assets/img/michael.jpg'),
		[BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[NUM_COMMENTS]: '211',
	},
]

const CommentWithPaginationPropedDefault = props => {
	return <CommentWithPagination comments={comments} {...props} />
}

export { CommentWithPaginationPropedDefault }
