/*

For this quiz, can you use this script, which is in the <head> of index.html,
to change the boring placeholder image to a picture of a cute puppy?

Remember, you'll need to pass a function into the jQuery object to run 
when the document is ready.

Here's a URL for a picture of a puppy: http://placepuppy.it/350/150

Good luck!

*/

function changeImage() {
	$('.article-item').find('img').attr('src','https://static.pexels.com/photos/1562/italian-landscape-mountains-nature-medium.jpg');
}

document.ready($(changeImage));