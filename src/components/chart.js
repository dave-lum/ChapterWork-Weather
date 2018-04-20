import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import lodash from 'lodash';

function average(data) {
  return lodash.round(lodash.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={30} width={80} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(props.data)} {props.unit}</div>
    </div>
  );
}
