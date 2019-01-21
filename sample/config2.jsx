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