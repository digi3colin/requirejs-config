export default (files, main) => {
  require(files, function(config){
    const paths = {};
    const shim = {};
    let packages = [];

    for(let i = 0; i < arguments.length; i++){
      const obj = arguments[i].default;

      if(obj.paths    !== undefined) Object.assign(paths, arguments[i].default.paths);
      if(obj.shim     !== undefined) Object.assign(shim, arguments[i].default.shim);
      if(obj.packages !== undefined) packages = packages.concat(arguments[i].default.packages);
    }

    const cfg = {
      waitSeconds : 30,
      paths: paths,
      shim:  shim,
      packages : packages,
    };

    require.config(cfg);

    main(cfg);
  });
}