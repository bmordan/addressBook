Contacts = new Mongo.Collection('contacts')
Contacts.getAll = function(){
  return Contact.find({}).fetch()
}