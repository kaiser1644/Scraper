// import
var express = require("express");
var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");
var ReactDOMServer = require("react-dom/server");
var React = require("react");

// constants
var BASE_URL = "http://forums.huaren.us";

var app = express();

var Home = React.createFactory(require("./client/public/index"));
app.get("/", function (req, res) {
	res.send(ReactDOMServer.renderToStaticMarkup(Home({})));
});

app.get("/scrape", function (req, res) {
	
	var url = "http://forums.huaren.us/showtopic.aspx?topicid=2036519";
	
	request(url, function (error, response, html) {
		if (!error) {
			var $ = cheerio.load(html);
			
			$("img[src^='/attachment']").each(function (index, element) {
				var imgSrc = $(element).attr("src");
				var id = imgSrc.split("=")[1];
				var file = fs.createWriteStream("image" + id+ ".jpg");
				request({
					headers: {
						"User-Agent": "Mozilla/5.0"
					},
					uri: BASE_URL + imgSrc
				}).pipe(file);
			});
		}
	});
	
	res.send("BenWeb");
});

app.listen("3000");

exports = module.exports = app;