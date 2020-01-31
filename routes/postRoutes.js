
var db = require("../models");

module.exports = function(app) {

  app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.member_id) {
      query.MemberId = req.query.author_id;
    }
    db.Post.findAll({
      where: query,
      include: [db.Member, db.Comment]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Member]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
