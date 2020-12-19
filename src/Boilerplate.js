import React from 'react';

function BoilerPlate(props){
  if (props.celcuis >= 100){
    return <p>The water will boil</p>
  }
    return <p>Water would not boil </p>
}

export default BoilerPlate;