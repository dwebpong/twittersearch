var cleanurl = function(url) {
	return url.replace('_normal', '');
};

var dothesearch = function()
{
	// Clear out the result set
	$('#tweets').empty();

	// Get the term from the input box
	var term = $('#search').val();

	// The url and query string we want to search
	var url = "http://roccopanacci.com/tw/twittersearch.php?callback=?";
	var params = { 'q':term };

	// Go make the request to Twitter
	$.getJSON(url, params, function(result){



		// For each "status" that's returned
		$.each(result.statuses, function(num, tweet) {

			// Dump the tweet text to the console
			console.log(tweet.text +", "+ tweet.created_at+", "+tweet.user.screen_name+", "+tweet.user.profile_image_url);

			// Dump the tweet text to the interface
			var $tweet = $('<li class="list-group-item row tweet">'+
				           ' <div class="col-sm-2 user">'+
				           '   <img src="" class="img-responsive tweet-img">'+
				           '   <p class="h4 tweet-name"></p>'+
				           ' </div>'+
				           ' <div class="col-sm-10 text">'+
				           '   <p class="h1 tweet-text"></p>'+
				           '   <p class="h3 text-right tweet-date"></p>'+
				           ' </div>'+
				           '</li>');

			$tweet.find('.tweet-text').text(tweet.text);
			$tweet.find('.tweet-date').text($.timeago(tweet.created_at));
			$tweet.find('.tweet-name').text('@' + tweet.user.screen_name);
			$tweet.find('.tweet-img').attr('src', cleanurl(tweet.user.profile_image_url));

			$tweet.appendTo('#tweets');


		});

	});

};

$('#dotwitter').on('click', dothesearch);
