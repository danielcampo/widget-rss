class WidgetRss {
	constructor (box) {
		this.box = box;
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.onload = function() {};
		script.src = 'http://www.jornalismoemfluxo.com/tudo?format=json&callback=wr.parse';
		head.appendChild(script);
	}

	parse (data) {
		this.data = data;
		this.display(this.box)
	}

	display (box) {
		var article = {
			title: 'Hello Template Literals',
			teaser: 'String interpolation is awesome. Here are some features',
			body: 'Lots and lots of sanitized HTML',
			tags: ['es6', 'template-literals', 'es6-in-depth'],
		}
		var {title,teaser,body,tags,url} = article
		var html = `<article>
			<header>
				<h1>${title}</h1>
			</header>
			<section>
				<div>${teaser}</div>
				<div>${body}</div>
			</section>
			<footer>
				<ul>
				${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
				</ul>
			</footer>
		</article>`

		box.insertAdjacentHTML("beforebegin", html)
		console.log(this.data)
	}
}
var wr = new WidgetRss(document.body)
