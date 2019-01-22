export default {
  paths : {
    "react"            : "//unpkg.com/react@16.7.0/umd/react.development",
    "react-dom"        : "//unpkg.com/react-dom@16.7.0/umd/react-dom.development",
  },
  shim: {

  },
  packages:[
    {
      name: 'ufo-kit',
      location: "../vendors/ufo-kit/",
      main: "ufo-kit"
    }
  ],
}