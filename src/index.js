import numeral from 'numeral';
import './index.css';
import $ from 'jquery';

import {getUsers} from './api/userApi';

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
// console.log(`I would pay ${courseValue} for this awesome course!`);

let el = document.querySelector('h1');
let span = document.querySelector('span');

el.innerHTML = `Good day`;
span.innerHTML = `${courseValue}`;

let $elz = $('h1');

getUsers().then(result => {
	let usersBody = "";

	result.forEach(user => {
		usersBody += `<tr>
			<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
			<td>${user.id}</td>
			<td>${user.firstName}</td>
			<td>${user.lastName}</td>
			<td>${user.email}</td>
			</tr>`
	});

$elz.text("Updated with JQuizzle");

	document.getElementById('users').innerHTML = usersBody;
})
