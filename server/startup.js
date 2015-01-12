Meteor.startup(function(){
  if(Contacts.find().count() === 0){
    Meteor.call('populateDatabase')
  }
})