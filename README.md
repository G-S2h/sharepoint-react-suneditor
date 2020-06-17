# sharepoint-react-suneditor

> A simple SunEditor React component wrapper made to work with SharePoint 2016 On-Premises



[![NPM](https://img.shields.io/npm/v/sharepoint-react-suneditor.svg)](https://www.npmjs.com/package/sharepoint-react-suneditor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description
This package aims to provide a React component wrapper for the [**SunEditor WYSIWYG**](https://www.npmjs.com/package/suneditor) that should work with **SharePoint Framework (SPFx) 1.1** (which is the required version for **SharePoint 2016 On-Premises**) and consequently relies on React 15.4.2 (since SPFx 1.1 is pinned to) ([See Andrew Connell comment about versions](https://github.com/SharePoint/sp-dev-docs/issues/3749)).

*If you are looking for a more general component, please see [suneditor-react](https://www.npmjs.com/package/suneditor-react).*

## Install

```bash
npm install --save sharepoint-react-suneditor
```

## Usage

```jsx
import React from 'react'

import { SPSunEditor } from 'sharepoint-react-suneditor';
import 'suneditor/dist/css/suneditor.min.css';

class Example extends React.Component {
  render() {
    return <SPSunEditor />
  }
}
```

Default SunEditor options can be passed through *sunEditorOptions* prop.

## Example

```jsx
import React from 'react'

import { SPSunEditor } from 'sharepoint-react-suneditor';
import 'suneditor/dist/css/suneditor.min.css';

class Example extends React.Component {
  _onChange(contents, suneditorCore) {
    console.log('SunEditor contents:', contents);
  }
  
  render() {
    return <SPSunEditor sunEditorOptions={{
        height: 220, 
        width: 512, 
        buttonList: [ ['bold', 'underline', 'italic'], ['list'], ['link'], ['image'] ], 
      }} 
      onChange={this._onChange.bind(this)} 
    />
  }
}
```


## Todo
- Make *upload* work with SharePoint

## License

MIT © [Salah](https://github.com/Salah)
