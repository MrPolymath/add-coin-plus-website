import React from 'react';
import { Statistic } from 'semantic-ui-react'

const Stats = function(props) {
  const items = [
    { label: 'Total KH', value: props.hashes/1000 },
    { label: 'Total $', value: '$'+ props.money },
  ]
  return (
    <div>
      <Statistic.Group items={items} style={{float: 'right'}}/>
    </div>
  )
}
export default Stats
