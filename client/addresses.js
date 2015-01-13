famous.polyfills
famous.core.famous
UI.body.rendered = function(){
  var context = new famous.core.Engine.createContext()
  var sequentialLayout = new famous.views.SequentialLayout
  var cards = Contacts.find({})
  var addressCards = []
  var counter = 0
  sequentialLayout.sequenceFrom(addressCards)
  _.each(cards, function(card){
    var surface = new famous.core.Surface({
      size: [200,60],
      content: counter+=1,
      properties: {
        backgroundColor: "rgb(36,36,196)",
        paddingLeft: "1%",
        lineHeight: "60px",
        border: "solid 2px white",
        color: "white"
      }
    })
    addressCards.push(surface)
  })
  var sequentialLayoutModifier = new famous.core.Modifier({
    origin: [0.5, 0],
    align: [0.5, 0]
  })
  context.add(sequentialLayoutModifier).add(sequentialLayout)
}