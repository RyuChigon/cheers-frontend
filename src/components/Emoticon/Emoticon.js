import React, { useState } from "react"
import {
  EmoticonButton,
  EmoticonContainer,
  ExpandField,
  EmoticonIcon,
} from './styled'
import {
  emoticon_btn
} from '@/images/etc'
import {
  angry,
  exclamation,
  heart,
  smile,
} from '@/images/emoticons'

const Emoticon = () => {

  const [expand, setExpand] = useState(false)
  const onClickExpand = () => setExpand(!expand)

  return (
    <EmoticonContainer>
      {expand ?
      (
        <ExpandField>
          <EmoticonIcon src={angry} />
          <EmoticonIcon src={exclamation} />
          <EmoticonIcon src={smile} />
          <EmoticonIcon src={heart} />
        </ExpandField>
      ) : null}
      <EmoticonButton src={emoticon_btn} onClick={onClickExpand} />
    </EmoticonContainer>
  )
}

export default Emoticon