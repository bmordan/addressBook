famous.polyfills
famous.core.famous

UI.body.rendered = function(){
  var context = new famous.core.Engine.createContext()
  var surface = new famous.core.Surface({
    size: [200, 60],
    content: "Hello You",
    properties: {
      backgroundColor: "hotPink",
      color: "white",
      textAlign: "center",
      lineHeight: "60px"
    }
  })
  var modifier = new famous.core.Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5]
  })
  context.add(modifier).add(surface)
}