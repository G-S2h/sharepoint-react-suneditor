import React from 'react'

import { SPSunEditor } from 'sharepoint-react-suneditor';
import 'suneditor/dist/css/suneditor.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '', 
      initialHtml: '<p>Initial <b>HTML</b>...</p>'
    }
  }
  
  setRandomHtml() {
    this.setState({...this.state, initialHtml: `<p>${Math.random() * 100}</p>`});
  }
  
  _onChange(contents, core) {
    this.setState({...this.state, html: contents})
  }
  
  render() {
    return <div>
      <fieldset>
        <legend>Component <em>SPSunEditor</em></legend>
          <SPSunEditor sunEditorOptions={{
            height: 220, 
            width: 512, 
            buttonList: [ ['bold', 'underline', 'italic'], ['superscript'], ['list'], ['link'], ['image'] ], 
          }} 
          onChange={this._onChange.bind(this)} 
          setContents={this.state.initialHtml}
        />
      </fieldset>
      
      <p>
        <button onClick={this.setRandomHtml.bind(this)}>Set random state.initialHtml</button>
      </p>
      
      <fieldset>
        <legend>Current <em>App.state.html</em></legend>
        <div dangerouslySetInnerHTML={{__html: this.state.html}}></div>
      </fieldset>
      
    </div>
  }
}