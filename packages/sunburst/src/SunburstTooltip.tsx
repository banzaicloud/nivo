import React from 'react'
import { BasicTooltip } from '@banzaicloud/nivo-tooltip'
import { NormalizedDatum } from './types'

export const SunburstTooltip = <RawDatum,>({
    color,
    id,
    formattedValue,
}: NormalizedDatum<RawDatum>) => (
    <BasicTooltip id={id} value={formattedValue} enableChip={true} color={color} />
)
