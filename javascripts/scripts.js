var url = "http://roccopanacci.com/tw/twittersearch.php?callback=?";
var params = { 'q':'Bitmaker' };

$.getJSON(url, params, function(result){

	console.log(result);

});


