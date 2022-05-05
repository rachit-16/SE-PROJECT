import React from 'react'
import Auxillary from '../../hoc/Auxiliary/Auxillary'
import AceEditor from 'react-ace'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/ext-language_tools'
// import styles from './Editor.module.css'

const editor = (props) => {
  return (
    <AceEditor
      height={props.height}
      width={props.width}
      mode={props.mode}
      theme="twilight"
      readOnly={props.readOnly}
      value={props.value}
      defaultValue={props.code ? props.code : props.template}
      name="UNIQUE_ID_OF_DIV"
      fontSize={14}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
      }}
      onChange={props.onChange}
    />
  )
}

export default editor
