import React, { Fragment } from 'react'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const RatingProfile = props => {
	return (
		<Fragment>
			<Rating
				name='customized-empty'
				value={2}
				precision={0.5}
				emptyIcon={<StarBorderIcon fontSize='inherit' />}
			/>
		</Fragment>
	)
}

export { RatingProfile }
