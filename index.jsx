export default (files, main) => {
  require(files, function(config){
    const paths = {};
    const shim = {};
    const packages = [];

    for(let i = 0; i < arguments.length; i++){
      Object.assign(paths, arguments[i].default.paths);
      Object.assign(shim, arguments[i].default.shim);
      packages.concat(arguments[i].default.packages);
    }

    require.config({
      waitSeconds : 30,
      paths: paths,
      shim:  shim,
      packages : packages,
    });

    main();
  });
}