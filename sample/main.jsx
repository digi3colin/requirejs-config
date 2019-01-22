import loadConfig from "../index";
loadConfig(['./config', './config2'], ()=>{
  require(['react', 'jquery'], (React, JQuery) =>{
    console.log(React);
    console.log(JQuery);
  });
});