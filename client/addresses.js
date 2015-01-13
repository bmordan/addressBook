Meteor.startup(function(){
  Modifier = null
  Transform = null
  FView.ready(function() {
    Modifier = famous.core.Modifier
    Transform = famous.core.Transform
    famous.polyfills
    famous.core.famous
  })
})
Template.body.helpers({
  items: function(){
    return Contacts.findAll()
  }
})
Template.card.famousEvents({
  'click': function(event, fview){
    console.log(event.toElement.id)
  },
  'touchstart': function(event, fview){
    console.log(event.target.id)
  },
  'touchmove': function(event, fview){
    console.log(_.first(event.changedTouches).clientX)
  }
})