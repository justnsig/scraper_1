var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Article.find({}).then(function (dbArticles) {
            res.render("index", {
                msg: "Javascript Libraries",
                articles: dbArticles
            });
            console.log(dbArticles);
        });
    });
};