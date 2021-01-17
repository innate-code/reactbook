// Сосздадим новый компонент - textarea(текстовая область) сохраняющий количество набранных в нем символов.

ReactDOM.render(
	React.createElement(TextAreaCounter, {
		text: "Denis"
	}),
	document.getElementById("app")
);

// Теперь реализуем компонент. 
// Начнем с создания версии «без состояния», не обрабатывающей обновления, поскольку она не слишком отличается от всех предыдущих примеров:

var TextAreaCounter = React.createClass({
	propTypes: {
		text: React.PropTypes.string,
	},
	getDeafaultProps: function() {
		return {
			text: '',
		};
	},

	render:function() {
		return React.DOM.div(null,
			React.DOM.textarea({
				defaultValue: this.props.text,
			}),
			React.DOM.h3(null, this.props.text.length)
			);
		}
	});

// Реализуйте в вашем компоненте метод getInitialState() , чтобы быть уверенными, что работа всегда будет вестись с допустимыми данными:

getInitialState: function() {
	return {
		text: this.props.text,
	};
};

// Данные, обрабатываемые этим компонентом, являются простым текстом в текстовой области, поэтому у состояния есть только одно свойство text , доступ к которому можно получить через выражение this.state.text .
// Изначально (в getInitialState() ) вы просто копируете свойство text . 
// Позже при изменении данных (в ходе набора пользователем текста в текстовой области) компонент обновляет свое состояние, используя вспомогательный метод:

_textChange:function(ev) {
	this.setState({
		text: ev.target.value,
	});
},

// Состояние всегда обновляется с помощью метода this.setState() , который получает объект и объединяет его с уже существующими в this.state данными. 
// Нетрудно догадаться, что _textChange() является отслеживателем событий, который получает объект события ev и извлекает из него текст, введенный в текстовую область.

// Остается лишь обновить метод render() для использования вместо this.props свойства this.state и установить отслеживатель событий:

render:function(){
	render React.DOM.div(nill
		React.DOM.textarea({
			valuer: this.state.text,
			onChange: this._textChange,
		}),
		React.DOM.h3(null,this.state.text.length)
	);
}

// Теперь, как только пользователь что-нибудь набирает в текстовой области, значение счетчика обновляется, чтобы соответствовать содержимому этой области