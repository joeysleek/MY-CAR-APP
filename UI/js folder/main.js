class Book{
	constructor(driver,car,daily,hour,route){
         this.drivers = driver;
         this.car = car;
         this.daily = daily;
         this.hour = hour;
         this.route = route;
	}
}

class UI{
	addBookToList(book){
		const list = document.getElementById('book-list');
		const row = document.createElement('tr');
		row.innerHTML = `
		    <td>${book.driver}</td>
		    <td>${book.car}</td>
		    <td>${book.daily}</td>
		    <td>${book.hour}</td>
		    <td>${book.route}</td>
            <td><a href="#" class="delete">X</a></td>`;

            list.appendChild(row);
	}

	showAlert(message, ClassName){
		const div = document.createElement('div');

		div.className = `alert ${className}`;

		div.appendChild(document.createTextNode(message));

		const container = document.querySelector('.container');

		const form = document.querySelector('#book-form');

		container.insertBefore(div, form);

		setTimeout(function(){
			document.querySelector('.alert').remove();
		}, 3000);
	}

	deleteBook(target){
		if(target.className === 'delete') {
		   target.parentElement.parentElement.remove();
		}

	}

	clearFields(){
		document.getElementById('driver').value = '';
		document.getElementById('car').value = '';
		document.getElementById('daily').value = '';
		document.getElementById('hour').value = '';
		document.getElementById('route').value = '';
	}

}
document.getElementById('book-form')
.addEventListener('submit', function(e){
	const driver = document.getElementById('driver').value,
	        car = document.getElementById('car').value,
	        daily = document.getElementById('daily').value,
	        hour = document.getElementById('hour').value,
	        route = document.getElementById('route').value


const book = new Book(driver,car,daily,hour,route);
const ui = new UI();
if(driver === '' || car === '' || daily === '' || hour === '' || route === '' ||){
	ui.showAlert('Please fill in all fields', 'error')
}else{
	ui.addBookToList(book);
	ui.showAlert('Ride Added!', 'success');
	ui.clearFields();
}
    e.preventDefault();
});

document.getElementById('book-list')
.addEventListener('click', function(e){
	const ui = new UI();
	ui.deleteBook(e.target);
	ui.showAlert('Ride Removed!','success');
	e.preventDefault();
});