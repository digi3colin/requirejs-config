import loadConfig from "//unpkg.com/requirejs-config@1.0.0/index.min";
loadConfig(['./config', './config2'], ()=>{
  require(['react', 'jquery'], (React, JQuery) =>{
    console.log(React);
    console.log(JQuery);
  });
});