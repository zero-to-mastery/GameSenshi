import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const StyledRating = withStyles({
	iconFilled: {
		color: '#ff8d72',
	},
	iconHover: {
		color: '#ff3d47',
	},
})(Rating)

const RatingProfile = props => {
	return (
		<Fragment>
			<StyledRating
				name='customized-color'
				value={2}
				precision={0.5}
				size='medium'
				emptyIcon={<StarBorderIcon fontSize='inherit' />}
			/>
		</Fragment>
	)
}

export { RatingProfile }
