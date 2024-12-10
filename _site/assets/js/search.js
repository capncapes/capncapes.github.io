(function () {
	function displaySearchResults(results, store) {
		var searchResults = document.getElementById('search-results');

		if (results.length) {
			var appendString = '';

			for (var i = 0; i < results.length; i++) {
				var item = store[results[i].ref];
				console.log(item);

				var typeIcon = '';
				if (item.type === 'Faith Blog Post') {
					typeIcon = '<svg id="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M176 0c-26.5 0-48 21.5-48 48l0 80-80 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l80 0 0 208c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-208 80 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48l-80 0 0-80c0-26.5-21.5-48-48-48L176 0z" /></svg >';
				} else if (item.type === 'MarTech Blog Post') {
					typeIcon = '<svg id="lightbulb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z" /></svg>';
				} else if (item.type === 'Book Review') {
					typeIcon = '<svg id="book" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 43 43 0 96 0l96 0 0 190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5L352 0l32 0 32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32z" /></svg>';
				} else if (item.type === 'Page') {
					typeIcon = '<svg id="page" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" /></svg>';
				} else if (item.type === 'Email Project') {
					typeIcon = '<svg id="envelope-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>';
				} else if (item.type === 'Web Project') {
					typeIcon = '<svg id="cursor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z" /></svg>';
				} else if (item.type.includes('Tag')) {
					typeIcon = '<svg id="tag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"/></svg>';
				} else {
					typeIcon = '<svg id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>';
				}

				appendString += '<li data-type="' + slugify(item.type) + '"><a href="' + item.url + '"><h3 class="mt-0 mb-2 mx-0 text-lg md:text-xl">' + item.title;
				item.type == 'Book Review' ? appendString += '<span>, by ' + item.author + '</span></h3></a>' : appendString += '</h3></a>'
				appendString += '<div class="splendid-flex mb-0 flex-row justify-start items-center">';
				appendString += '<a href="' + item.url + '" class="mb-0">' + typeIcon + '</a>';
				appendString += '<small class="m-0 ml-2 text-xs uppercase">' + item.type + '</small></div>';
				appendString += '<hr class="mt-3 mb-1">';
				appendString += '<p class="my-0 mx-0 text-sm">' + item.description + '</p></li>';
			}

			searchResults.innerHTML = appendString;
		} else {
			searchResults.innerHTML = '<li><h3 class="mt-0 mb-2 mx-0 text-lg md:text-xl">No results found!</h3></li>';
		}
		setTimeout(() => {
			searchResults.classList.add('visible');
		}, 100);
	}

	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split('&');

		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');

			if (pair[0] === variable) {
				return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
			}
		}
	}

	var searchTerm = getQueryVariable('query');

	if (searchTerm) {
		document.getElementById('search-box').setAttribute('value', searchTerm);
		document.title = `Search results for ${searchTerm}`;

		var idx = lunr(function () {
			this.field('id');
			this.field('title', { boost: 10 });
			this.field('author', { boost: 5 });
			this.field('category');
			this.field('description');
			this.field('type');
		});

		for (var key in window.store) {
			idx.add({
				'id': key,
				'title': window.store[key].title,
				'author': window.store[key].author,
				'category': window.store[key].category,
				'description': window.store[key].description,
				'type': window.store[key].type
			});

			var results = idx.search(searchTerm);
			displaySearchResults(results, window.store);
		}
	}
})();