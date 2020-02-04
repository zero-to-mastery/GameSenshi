import React from 'react'
import { CommentWithPagination } from './CommentWithPagination'
import { Exports } from '4_comp_3_Molecules'
import { stopUndefined } from '1_utils'
const {
	COMMENT_ID,
	COMMENT_NAME,
	COMMENT_POSTED_TIME,
	COMMENT_AVATAR,
	COMMENT_BODY,
	COMMENT_NUM_COMMENTS,
} = stopUndefined(Exports)

const comments = [
	{
		[COMMENT_ID]: 1,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '243',
	},
	{
		[COMMENT_ID]: 2,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '211',
	},
	{
		[COMMENT_ID]: 3,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '217',
	},
	{
		[COMMENT_ID]: 4,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '192',
	},
	{
		[COMMENT_ID]: 5,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '243',
	},
	{
		[COMMENT_ID]: 6,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '211',
	},
	{
		[COMMENT_ID]: 7,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '217',
	},
	{
		[COMMENT_ID]: 8,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '192',
	},
	{
		[COMMENT_ID]: 9,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '243',
	},
	{
		[COMMENT_ID]: 10,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '211',
	},
	{
		[COMMENT_ID]: 11,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '243',
	},
	{
		[COMMENT_ID]: 12,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '211',
	},
	{
		[COMMENT_ID]: 13,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '217',
	},
	{
		[COMMENT_ID]: 14,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '192',
	},
	{
		[COMMENT_ID]: 15,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '243',
	},
	{
		[COMMENT_ID]: 16,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '211',
	},
	{
		[COMMENT_ID]: 17,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '217',
	},
	{
		[COMMENT_ID]: 18,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '192',
	},
	{
		[COMMENT_ID]: 19,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '243',
	},
	{
		[COMMENT_ID]: 20,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '211',
	},
	{
		[COMMENT_ID]: 21,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '217',
	},
	{
		[COMMENT_ID]: 22,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '192',
	},
	{
		[COMMENT_ID]: 23,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '243',
	},
	{
		[COMMENT_ID]: 24,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
		[COMMENT_NUM_COMMENTS]: '211',
	},
]

const CommentWithPaginationPropedDefault = props => {
	return <CommentWithPagination comments={comments} {...props} />
}

export { CommentWithPaginationPropedDefault }
