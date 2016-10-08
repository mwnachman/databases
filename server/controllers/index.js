var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get().then(function(rows) {
        var responseObj = {results: []};
        console.log(rows);
        rows.forEach(function(row) {
          responseObj.results.push({username: row.username, 
                                    text: row.message, 
                                    objectId: row.id, 
                                    roomname: row.name});
        });
        res.json(responseObj);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      /*req.on('data', function(data) {
        // console.log(data.toString());
        var msg = JSON.parse(data.toString());
        models.messages.post(msg.username, msg.text, msg.roomname);
        res.end();

      });*/
      models.messages.post(req.body.username, req.body.message, req.body.roomname);
      res.end();
      //models.message.post(usernme, text, roomname)
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //console.log(req.body.username);
      //req.on('data', function(data) {
      //console.log(data.toString());
      //var msg = JSON.parse(req.body);
      models.users.post(req.body.username);
      res.end();
      //});
    }
  }
};

