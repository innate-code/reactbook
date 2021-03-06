// Вам должны быть известны специальные DOM-атрибуты, например class, for и style.
// Вы не можете использовать class и for, поскольку в JavaScript они являются зарезервированными словами. Вместо них нужно выбрать названия className и htmlFor:

// Пример неработоспособного кода

React.DOM.h1(
	{
		class:"pretty",
		for: "me",
	},
	"Hello World!"
);

// Пример работоспособного кода

React.DOM.h1(
	{
		className: "pretty",
		htmlFor: "me",
	},
	"Hello World!"
);

// Что касается атрибута style, то вы не можете использовать строку, как это обычно делается в HTML, вместо этого следует задействовать объект JavaScript. Отказ от использования строк всегда приветствуется (сокращается риск быть атакованным с применением межсайтовых сценариев (XSS)), поэтому такие изменения будут только поощряться.

// Пример неработоспособного кода

React.DOM.h1(
	{
		style: "background:black; color:white; font-family: Verdana",
	},
	"Hello World!"
);

// Пример работоспособного кода

React.DOM.h1(
	{
		style: {
			background: "black",
			color: "white",
			fontFamily: "Verdana",
		}
	},
	"Hello World!"
);

// Следует также заметить, что при работе со свойствами CSS необходимо использовать имена API-интерфейсов JavaScript, например fontFamily, а не font-family.

