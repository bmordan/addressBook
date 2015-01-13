Contacts = new Mongo.Collection('contacts')
Contacts.findAll = function(){
  return Contacts.find({}).fetch()
}