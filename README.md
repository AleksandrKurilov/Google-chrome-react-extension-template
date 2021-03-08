## Google chrome react extension template

This is an empty project for creating a google-chrome extension with React JS.

Project structure:
```
├───public                          --> Static files
│   └───images                      --> Static images
└───src                             --> Source files
    ├───apps                        --> Source code for extension screens
    │   ├───extension               --> Code for extension screen (browser action)
    │   └───options                 --> Code for options screen
    │       └───components          --> Code of components for options sreen
    │           └───select-option  
    ├───background-scripts          --> Code of background scripts
    ├───consts                      --> Consts for the extension
    ├───content-sripts              --> Code of contents scripts
    └───modules                     --> Code of helper module
```

#### How to build it?
For build the extension, you need:
1) Run command `npm install` - for install packeges
2) Run command `npm run dev` - for development build or `npm run build` - for production build

#### How to debug it?
For debug the extension, you need:
1) Open <i>chrome://extensions/</i> page on your google chrome browser
2) Turn on <i>developer mode</i>
3) Click button <i>Load unpacked extension</i> and select it directory

#### How to develope 
1) Use <i>background-scripts</i> directory, for placement your background js scripts
2) Use <i>content-sripts</i> directory, for placement your content js scripts
3) Use <i>apps</i> directory for edit exists extension apps or add your own new app 
4) The extension <i>manifest.json</i> file is located in <i>/public</i> directory
5) For configuring build process, use <i>webpack.config.js</i> file

Google chrome extension docs:
https://developer.chrome.com/docs/extensions/
