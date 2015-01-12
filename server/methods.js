Meteor.methods({
  populateDatabase: function(){
    var rawData = [
      {
        "first_name": "Camilla",
        "surname": "Camil",
        "address": "Cam City",
        "phone_number": "07488297304",
        "email": "Camilla@camil.com",
        "id": 1221,
        "createdAt": "2014-04-08T21:40:53.000Z",
        "updatedAt": "2014-07-30T21:16:17.000Z"
      },
      {
        "first_name": "David",
        "surname": "Ginola",
        "address": "France",
        "phone_number": "07411075844",
        "email": "david@ginola.com",
        "id": 1321,
        "createdAt": "2014-04-10T00:10:52.000Z",
        "updatedAt": "2014-07-30T16:01:52.000Z"
      },
      {
        "first_name": "Barry",
        "surname": "Bannon",
        "address": "Banana Street",
        "phone_number": "07411857962",
        "email": "Barry@banana.org",
        "id": 1731,
        "createdAt": "2014-07-29T21:49:57.000Z",
        "updatedAt": "2014-07-31T08:14:26.000Z"
      },
      {
        "first_name": "Erik",
        "surname": "Svenson",
        "address": "Sweden",
        "phone_number": "074111222333",
        "email": "Erik@Svenson.com",
        "id": 1741,
        "createdAt": "2014-07-29T21:51:23.000Z",
        "updatedAt": "2014-07-30T21:16:09.000Z"
      },
      {
        "first_name": "Freddie",
        "surname": "Mercury",
        "address": "Queensland",
        "phone_number": "07492920101",
        "email": "Freddie@Queen.com",
        "id": 1791,
        "createdAt": "2014-07-31T07:49:23.000Z",
        "updatedAt": "2014-07-31T07:49:23.000Z"
      },
      {
        "first_name": "Testname",
        "surname": "Test surname",
        "address": "yjjjj",
        "phone_number": null,
        "email": null,
        "id": 1851,
        "createdAt": "2014-08-13T11:00:04.000Z",
        "updatedAt": "2014-10-11T18:54:18.000Z"
      }
    ];
    _.each(rawData, function(contact){
      Contacts.insert({
        first_name: contact.first_name,
        surname: contact.surname,
        address: contact.address,
        phone_number: contact.phone_number,
        email: contact.email,
        id: contact.id,
        createdAt: contact.createdAt,
        updatedAt: contact.updatedAt
      })
    })
  }
})