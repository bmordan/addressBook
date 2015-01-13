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

Template.card.events({
  'click': function(event, template){
    console.log(this._id)
  }
})
