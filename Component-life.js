// API-интерфейс для создания нового компонента имеет следующий вид:

var MyComponent = React.createClass({
	/* спецификации */
});

// В качестве «спецификаций» используется объект JavaScript, имеющий один обязательный метод render() 
// и несколько необязательных методов и свойств. Самый простой пример может выглядеть следующим образом:

var Component = React.createClass({
	render:function() {
		return React.DOM.span(null, "I'm so custom");
	}
});

// Как видите, единственное, что нужно сделать, — это реализовать метод render().
// Он должен возвратить React-компонент, именно поэтому вы видите в фрагменте кода компонент span; просто текст возвратить нельзя.

// Использование вашего компонента в приложении похоже на использование DOM-компонентов:

ReactDOM.render(
	React.createElement(Component),
	document.getElementById("app")

);

// Один из способов создания экземпляра вашего компонента — применение метода React.createElement().
// При создании сразу нескольких экземпляров применяется фабрика:

var ComponentFactory = React.createFactory(Component);
	ReactDOM.render(
		ComponentFactory(),
		document.getElementById("app")
	);

// Учтите, что уже известные вам методы семейства React.DOM.* фактически являются всего лишь удобными оболочками вокруг React.createElement(). 
// Иными словами, этот код также работает с DOM-компонентами:

ReactDOM.render(
	React.createElement("span", null, "Hello"),
	document.getElementById("app")
);

//Как видите, DOM-элементы, в отличие от функций JavaScript, определяются в виде строк, как и в случае с пользовательскими компонентами.


