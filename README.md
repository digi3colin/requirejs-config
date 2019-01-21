# requirejs-config
The small utilities to load require.js config path and shim configuration.

### How to use
All the sample written in es6 then precompiled to umd modules.

html:
````
<script data-main="main" src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
````

config.jsx
````
export default {
  paths : {
    "react"            : "//unpkg.com/react@16.7.0/umd/react.development",
    "react-dom"        : "//unpkg.com/react-dom@16.7.0/umd/react-dom.development",
  },
  shim: {

  },
}
````

config2.jsx
````
export default {
  paths : {
    "jquery"           : "//unpkg.com/jquery@2.2.4/dist/jquery.min",
  },
  shim: {
    'jquery' : {
      exports: '$'
    },
  },
}
````


main.jsx
````
import loadConfig from "//unpkg.com/requirejs-config@1.0.0/index.min";
loadConfig(['./config', './config2'], ()=>{
  require(['react', 'jquery'], (React, JQuery) =>{
    console.log(React);
    console.log(JQuery);
  });
});
````
