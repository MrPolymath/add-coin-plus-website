import React from 'react';
import { Statistic } from 'semantic-ui-react'

const Stats = () => {
  const items = [
    { label: 'Total H', value: '4054' },
    { label: 'Total $', value: '$15' },
  ]
  return (
    <div>
      <Statistic.Group items={items} style={{float: 'right'}}/>
    </div>
  )
}
export default Stats
