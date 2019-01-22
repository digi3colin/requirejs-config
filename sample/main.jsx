import loadConfig from "../index";
loadConfig(['./config', './config2'], (cfg)=>{
  console.log('obj:');
  console.log(cfg);

  require(['react', 'jquery'], (React, JQuery) =>{
    console.log(React);
    console.log(JQuery);
  });
});