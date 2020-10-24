import React, {useState} from 'react'

import {ItemStyle} from '../helpers/styles/Item'

export default function Item(props) {

  const [isLoading, setIsLoading] = useState(true)

  const onErrorHandler = (event) => {
    event.target.src = 'https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png';
  }
  return (
    <ItemStyle href={props.formattedUrl}>
      <img src={props.imageSrc}
              alt={props.title} 
              onLoad={() => setIsLoading(false)}
              onError={onErrorHandler}
              className={isLoading?'Hide':''}/>
      {isLoading && <img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" />}
      <div>
        <span>{props.title}</span>
        <p>{props.htmlSnippet}</p>
      </div>
    </ItemStyle>
  )
}
