// This is an example of what you can do with just a few things.
// A little imagination and a happy dream in your heart.

// Everyone wants to enjoy the good parts.
// But you have to build the framework first.
var postcss = require('postcss');

// With something so strong, a little bit can go a long way.
var parser  = require('postcss-value-parser');

// Paint anything you want on the canvas.
// Create your own world.
var colors = {
	'sap-green':        '#0a3410',
	'alizarin-crimson': '#4e1500',
	'van-dyke-brown':   '#221b15',
	'dark-sienna':      '#5f2e1f',
	'midnight-black':   '#000000',
	'prussian-blue':    '#021e44',
	'phthalo-blue':     '#0C0040',
	'phthalo-green':    '#102e3c',
	'cadmium-yellow':   '#ffec00',
	'yellow-ochre':     '#c79b00',
	'indian-yellow':    '#ffb800',
	'bright-red':       '#db0000',
	'titanium-white':   '#ffffff'
};

// It’s beautiful.
// And we haven’t even done anything to it yet.

// You can do anything you want to do.
// This is your world.
module.exports = postcss.plugin('postcss-bob-ross-palette', function () {
	// We don't make mistakes.
	// We just have happy accidents.
	Object.keys(colors).forEach(function (key) {
		// Find freedom on this canvas
		colors[key.replace(/-/g, '')] = colors[key];
	});

	// No pressure. Just relax and watch it happen.
	return function (css) {
		// Only think about one thing at a time.
		// Don’t get greedy.
		css.walkDecls(function (decl) {
			// Everyone is going to see things differently.
			// And that’s the way it should be.
			decl.value = parser(decl.value).walk(function (node) {
				// Maybe in our world there lives a happy little tree over there.
				if (node.type === 'word') {
					// Don’t forget to make all these little things individuals.
					// All of them special in their own way.
					var word = node.value;

					// It’s amazing what you can do with a little love in your heart.
					if (word in colors) {
						// See how it fades right into nothing.
						// That's just what you're looking for.
						node.value = colors[word];
					}
				}
			});
		});
	};
});

// I think there's an artist hidden at the bottom of every single one of us.
