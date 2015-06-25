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
			var $user = 
				$('<div class="col-sm-2">')
					.html('<img src="' + tweet.user.profile_image_url + '" class="img-responsive tweet-img">')
					.append('<p class="h4 tweet-name">@' + tweet.user.screen_name + '</p>');

			var $text = 
				$('<div class="col-sm-10">')
					.html('<p class="h1 tweet-text">' + tweet.text + '</p>')
					.append('<p class="h3 text-right tweet-date">' + tweet.created_at + '</p>');

			var $tweet = $('<li class="list-group-item row tweet">')
				.html($user)
				.append($text)
				.appendTo('#tweets');

		});

	});

};

$('#dotwitter').on('click', dothesearch);
