class WidgetRss {
	constructor (box, url) {
		this.box = box;
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.onload = function() {};
		script.src = url;
		head.appendChild(script);
	}

	parse (data) {
		this.data = data;
		this.display(this.box)
	}

	display (box) {
		let html = []
		for (let article of this.data.items) {
			let {assetUrl, categories, fullUrl, id, excerpt, title, tags} = article
			let link = 'http://jornalismoemfluxo.net' + fullUrl
			html.push(`
<div class="summary-item summary-item-record-type-text sqs-gallery-design-autogrid-slide summary-item-has-thumbnail summary-item-has-excerpt summary-item-has-author">
<!-- Thumbnail -->
<a href="${link}" class="summary-thumbnail-container sqs-gallery-image-container" data-title="${title}">
	<div class="summary-thumbnail img-wrapper">
	<!-- Main Image -->
		<img class="summary-thumbnail-image" alt="${title}" src="${assetUrl}" height=200 style="max-width:100%">
	</div>
</a>
<div class="summary-title">
	<a href="${link}" class="summary-title-link">${title}</a>
</div>
<div class="summary-excerpt">
	${excerpt}
</div>
</div>`)
// <div class="summary-metadata-container summary-metadata-container--below-content">
// 	<div class="summary-metadata summary-metadata--primary">
// 		<!-- Timestamp -->
// 		<time class="summary-metadata-item summary-metadata-item--date" datetime="2014-06-06">Jun  6, 2014</time>
// 		<!-- Author -->
// 		<span class="summary-metadata-item summary-metadata-item--author"><a href="/tudo/?author=538f9ef7e4b0c930e8bef710#show-archive">Bruno Torturra</a></span>
// 	</div>
// </div>
		}
		box.insertAdjacentHTML("beforeend", html.join("\n"))
	}
}
//var wr = new WidgetRss(document.body, 'http://www.jornalismoemfluxo.com/tudo?format=json&callback=wr.parse')
