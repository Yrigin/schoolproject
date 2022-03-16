import { FormItem, Input, Panel, PanelHeader, PanelHeaderBack, Textarea } from '@vkontakte/vkui';
import React, { useState } from 'react';
const Zhesar = ({ id, go }) => {
    const [Bias, setBias] = useState(1)
    const [Text, setText] = useState('')
    const [TextShif, setTextShif] = useState('')
    
    const  rot = (str) => { 
      let newStr = "";
      for(var i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=1){
          newStr+=String.fromCharCode((str.charCodeAt(i)+Bias));
        }else{
          newStr+=String.fromCharCode(str.charCodeAt(i));
        }
      }
      return newStr;
    }
    const  derot = (str) => { 
        let newStr = "";
        for(var i=0;i<str.length;i++){
          if(str.charCodeAt(i)>=1){
            newStr+=String.fromCharCode((str.charCodeAt(i)-Bias));
          }else{
            newStr+=String.fromCharCode(str.charCodeAt(i));
          }
        }
        return newStr;
      }
    


    const onTextInput = (e) =>
    {
        const text = e.target.value
        setText(text)
        const  t = rot(text)
         
        setTextShif(t)
    }
    const onTextShitInput = (e) =>
    {
        const text = e.target.value
        setTextShif(text)
        const  t = derot(text)
        setText(t)
         
       
    }



    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => go('home')} />}
            >Шифр Цезаря</PanelHeader>
            <FormItem top='Обычный текст'>
                <Textarea
                maxLength={160}
                    value={Text}
                    onChange={onTextInput}
                ></Textarea>
            </FormItem>
            <FormItem top='Смещение'>

                <Input
                    min={1}
                    max={25}
                    type='number'
                    value={Bias}
                    onChange={(e) => setBias(e.target.value)}
                >

                </Input>
            </FormItem>

            <FormItem top='Шифрованный текст'>
                <Textarea
                    value={TextShif}
                    onChange={onTextShitInput}
                    maxLength={160}
                ></Textarea>
            </FormItem>
        </Panel>
    )


}
export default Zhesar