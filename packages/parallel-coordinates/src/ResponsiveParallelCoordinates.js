/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import { ResponsiveWrapper } from '@banzaicloud/nivo-core'
import ParallelCoordinates from './ParallelCoordinates'

const ResponsiveParallelCoordinates = props => (
    <ResponsiveWrapper>
        {({ width, height }) => <ParallelCoordinates width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)

export default ResponsiveParallelCoordinates
