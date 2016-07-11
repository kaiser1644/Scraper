// import
var express = require("express");
var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");
var ReactDOMServer = require("react-dom/server");
var React = require("react");
var Path = require("path");
var Http = require("http");

// constants
var BASE_URL = "http://forums.huaren.us";

var app = express();
var Home = React.createFactory(require("./client/public/index"));
var Result = React.createFactory(require("./client/public/result"));

// serve public files
app.use(express.static(Path.join(__dirname, "client/public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	var reactHTML = ReactDOMServer.renderToString(Home({}));
	res.render("template", { content: reactHTML });
});

app.get("/scrape", function (req, res) {	
	var base_url = "http://forums.huaren.us";
	var login_url = "/login.aspx";
	var forum_url = "/showforum.aspx?forumid=";
	var agent = new Http.Agent();
	
	var forums = req.query.forums;
	var keywords = req.query.keywords;
	var username,password,isGuest;
	var result = [];
	var requestCount = 0;
	var completedRequests = 0;
	isGuest = req.query.isGuest;
	
	
	// Enable cookies
	request = request.defaults({jar: true});
	
	// Helper functions to parse forums and threads
	function parseOneThread(url) {
		requestCount++;
		request({
			url: base_url + url,
			agent: agent
		}, function(error, response, html) {
			if (!error) {	
				var $ = cheerio.load(html);
				$("div[id^=message] img[src^='/attachment']").each(function (index, element) {
					result.push(base_url + $(element).attr("src"));
				});
				if (completedRequests++ === requestCount) {
					res.send(result);
					//var reactHTML = ReactDOMServer.renderToString(Result({ props: { data: result } }));
					//res.render("template", { content: reactHTML });
				}
			}
		});
	}
	
	function parseForums(forums) {
		for (var i = 0; i < forums.length; i++) {
			request({
				url: base_url + forum_url + forums[i],
				agent: agent
			}, function(error, response, html) {
				if (!error) {
					var $ = cheerio.load(html);
					$("#threadlist .subject a").each(function (index, element) {
						var title = $(element).text();
						for (var i = 0; i < keywords.length; i++) {
							if (title.includes(keywords[i])) {
								parseOneThread($(element).attr("href"));
								break;
							}
						}					
					});
				}
			});
		}
	}
	
	// Log in	
	if (isGuest === "false") {
		username = req.query.username;
		password = req.query.password;
		request({
			url: base_url + login_url,
			qs: {
				username: username,
				password: password,
				templateid: "0",
				expires: "43200"
			},
			agent: agent
		}, function (error, response, html) {
			if (!error) {
				parseForums(forums);
			}
		});
	} else {
		parseForums(forums);
	}
	
});

app.listen("3000");

exports = module.exports = app;