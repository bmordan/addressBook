Contacts = new Mongo.Collection('contacts')
Contacts.findAll = function(){
  return Contacts.find({}, {sort: {surname: 1}}).fetch()
}