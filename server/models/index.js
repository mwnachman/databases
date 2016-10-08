var db = require('../db');


module.exports = {
  messages: {
    get: function () {
      return new Promise(function(resolve, reject) {
        db.connection.query('select users.username, messages.message, messages.id, rooms.name from messages, rooms, users', function(err, rows) {
          if (err) {
            reject(err);
            return;
          }
          resolve(rows);
        });
      });
    }, // a function which produces all the messages
    post: function (username, text, roomname) {
      //if (text === undefined) text = 'hello';
      console.log('username '+username, 'text '+text, 'roomname '+roomname);
      db.connection.query(`insert into messages values (null, (select id from users where username = '${username}'), "${text}", (select id from rooms where name = '${roomname}'));`);
      return;
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (username) {
      db.connection.query(`insert into users values (null, '${username}')`);
      return;
    }
  }
};

