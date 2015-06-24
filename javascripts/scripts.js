// The url and query string we want to search
var url = "http://roccopanacci.com/tw/twittersearch.php?callback=?";
var params = { 'q':'Bitmaker' };

// Go make the request to Twitter
$.getJSON(url, params, function(result){

	// For each "status" that's returned
	$.each(result.statuses, function(num, tweet) {

		// Dump the tweet text to the console
		console.log(tweet.text);

		// Dump the tweet text to the interface
		$('<p>').text(tweet.text).appendTo('#tweets');

	});

});

// DONE!