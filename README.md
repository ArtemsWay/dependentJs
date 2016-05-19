# DependentJs

> Добавляет возможность скрывать или показывать поля формы в зависимости от выбранного значения элемента "select".

## Пример

### HTML

```html
	<form id="checkout">
		<fieldset>
			<label for="delivery">Доставка</label>
			<select id="delivery" name="delivery" data-dependent="delivery">
				<option value="pickup">Самовывоз</option>
				<option value="courier">Курером</option>
				<option value="delivery-service">Службой доставки</option>
			</select>
		</fieldset>
		<fieldset>
			<label for="name">Имя</label>
			<input id="name" name="name"></input>
		</fieldset>
		<fieldset>
			<label for="phone">Телефон</label>
			<input id="phone" name="phone"></input>
		</fieldset>

		<!-- Только для "Курьером" и "Службой доставки" -->
		<fieldset data-dependent-select="delivery" data-dependent-on="courier, delivery-service">
			<label for="address">Адресс</label>
			<input id="address" name="address"></input>
		</fieldset>

		<!-- Только для "Службой доставки" -->
		<fieldset data-dependent-select="delivery" data-dependent-on="delivery-service">
			<label for="office">№ отделения</label>
			<input id="office" name="office"></input>
		</fieldset>
	</form>
```

### JS

```js
	$('#checkout').dependentJs();
```