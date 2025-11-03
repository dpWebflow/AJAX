// https://67991d02be2191d708b20940.mockapi.io

/*
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if(this.readystate == 4 && this.status == 200) {
		console.log(xhttp.responseText);

	}
}

xhttp.open('GET','https://67991d02be2191d708b20940.mockapi.io/Users', true);
xhttp.send();

*/

document.querySelector('#fetchBtn').addEventListener('click', e => {
	e.preventDefault();

	let id = document.querySelector('#userID').value;

	console.log(id)

	let r = fetch('https://67991d02be2191d708b20940.mockapi.io/Users/' + id)
	.then(response => response.json()).then(data => {
		console.log(data);


		let podaci = document.querySelector('#podaci');

		podaci.innerHTML = `<p><b>${data['email']}</b></p>
							<p>${data['username']}</p>
							<p><i>${data['password']}</i></p>`


	}).catch(error => {
		alert('prekinuta veza');
});

});



