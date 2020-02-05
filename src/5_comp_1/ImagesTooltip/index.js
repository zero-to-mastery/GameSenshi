import React, { useMemo } from 'react'
import { ImagesTooltip } from './ImagesTooltip'
import { getImagesTooltip } from './utils'

const ImagesTooltipOptioned = props => {
	const { icons, ...otherProps } = props
	const icons_ = useMemo(() => getImagesTooltip(icons), [icons])
	return <ImagesTooltip icons={icons_} {...otherProps} />
}

export { ImagesTooltipOptioned }
