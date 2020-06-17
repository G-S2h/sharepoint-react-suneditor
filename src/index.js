import React from 'react'
import PropTypes from 'prop-types';

import suneditor from 'suneditor';
import plugins from 'suneditor/src/plugins';
import lang from 'suneditor/src/lang';

import 'suneditor/dist/css/suneditor.min.css';

export class SPSunEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawHtml: ''
    }
    this.editor = null;
    this.suneditorTextareaId = this.props.textareaId || 'suneditor-textarea-'+ Math.floor(Math.random() * 999);
  }
  
  componentDidMount() {
    var langCode = this.props && this.props.sunEditorOptions.lang ? lang[this.props.sunEditorOptions.lang] : lang.en;
    this.editor = suneditor.create(this.suneditorTextareaId, {...this.props.sunEditorOptions, plugins: plugins, lang:  langCode});
    
    this.editor.onChange = this.props.onChange;
    
    if(this.props.setContents) {
      this.editor.setContents(this.props.setContents);
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    
    if(prevProps.setContents !== this.props.setContents) {
      this.editor.setContents(this.props.setContents);
    }
    
  }
  
  render() {
    return <div>
        <textarea id={this.suneditorTextareaId}></textarea>
      </div>
  }
}

SPSunEditor.propTypes = {
  textareaId: PropTypes.string, 
  setContents: PropTypes.string, 
  sunEditorOptions: PropTypes.object, 
}


export default SPSunEditor;