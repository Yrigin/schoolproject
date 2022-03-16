import { FormItem, Input, Panel, PanelHeader, PanelHeaderBack, Textarea } from '@vkontakte/vkui';
import React, { useState } from 'react';
import { utils } from 'aes-js';
const Aes = ({ id, go }) => {

  const [Text, setText] = useState('')
  const [TextShif, setTextShif] = useState('')





  const onTextInput = (e) => {
    const text = e.target.value
    setText(text)
    const t = utils.utf8.toBytes(text)
    const encryptedHex = utils.hex.fromBytes(t);

    setTextShif(encryptedHex)
  }
  // const onTextShitInput = (e) => {
  //   const text = e.target.value
  //   setTextShif(text)
  //   const encryptedBytes = utils.hex.toBytes(text);

  //   // The counter mode of operation maintains internal state, so to
  //   // decrypt a new instance must be instantiated.
   

  //   // Convert our bytes back into text
  //   var decryptedText =  utils.utf8.fromBytes(encryptedBytes);
  //   console.log(D)
  //   setText(decryptedText)


  // }



  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => go('home')} />}
      >AES</PanelHeader>
      <FormItem top='Обычный текст'>
        <Textarea
          maxLength={160}
          value={Text}
          onChange={onTextInput}
        ></Textarea>
      </FormItem>


      <FormItem top='Шифрованный текст'>
        <Textarea
          value={TextShif}
          // onChange={onTextShitInput}
          maxLength={160}
        ></Textarea>
      </FormItem>
    </Panel>
  )


}
export default Aes