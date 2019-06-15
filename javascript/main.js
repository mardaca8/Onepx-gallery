var overlayOpener = document.getElementById('overlayOpener');
var overlay = document.getElementsByClassName("overlay")[0];
var cancel = document.getElementsByClassName('cancel')[0];
var upload = document.getElementsByClassName('upload')[0]
var sourceInput = document.getElementsByClassName('source')[0];
var descriptionArea = document.getElementsByClassName('description')[0];
var container = document.getElementsByClassName('container')[0]
var mask = document.getElementsByClassName('mask')[0]

upload.addEventListener('click', function() {
	var headline = document.createElement('div');
	headline.classList.add('headline');

	headline.innerHTML = buildCard(sourceInput.value, descriptionArea
	.value);
	container.appendChild(headline);
	toggleElement(overlay);
	sourceInput.value = ' ';
	descriptionArea
.value = ' ';
})

overlayOpener.addEventListener('click', function(){
	toggleElement(overlay);
	toggleElement(mask);
});

cancel.addEventListener('click', function(){
	toggleElement(overlay);
	toggleElement(mask);

})

upload.addEventListener('click', function(){
	toggleElement(mask);

})

function toggleElement(element) {
	if (element.classList.contains("hidden")){	
		element.classList.remove("hidden");
	} 
	else {
		element.classList.add("hidden");
	}
}

function buildCard(src, description) {
	return '<a target="_blank" href="' + src + '"><img src="' + src + '" alt="Mountains" width="600" height="400"></a><div class="desc">' + description + '</div>'
}
