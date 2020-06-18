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

Default SunEditor options can be passed through *sunEditorOptions* prop. However, some options such as *plugins* and *lang* have their own prop (See below, Props).

```jsx
<SPSunEditor sunEditorOptions={{
    height: 220, 
    width: 512, 
    buttonList: [ ['bold', 'underline', 'italic'], ['list'], ['link'], ['image'] ], 
  }} 
  onChange={this._onChange.bind(this)} 
/>
```

## Props
**_sunEditorOptions_** : SunEditor native options

Those are the native options that come with SunEditor.

**_customPlugins_** : Add your custom plugins

An array of [custom plugins](http://suneditor.com/sample/html/customPlugins.html).

**_lang_** : Define language

Takes a language code (en, de, fr...).

## Run an example
1. Clone this repository, 
2. run `npm install`, 
3. run `npm start` both in root and example folders.


## Todo
- Make *upload* work with SharePoint

## Credits
A great thank you to SunEditor's creator and active maintainer, [JiHong88](https://www.github.com/JiHong88).

## License

MIT © [Salah](https://github.com/Salah)
