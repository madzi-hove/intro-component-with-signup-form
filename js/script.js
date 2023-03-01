// DOM variables
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const errorMsgs = document.querySelectorAll(".error-message");
const submitBtn = document.querySelector(".form__btn");
const marginBottom = "4px";

// check if input is empty
function checkFirstName() {
	if (firstName.value == "") {
		firstName.classList.add("invalid");
		firstName.nextElementSibling.classList.remove("hidden");
		firstName.setAttribute("placeholder", "");
		firstName.style.marginBottom = marginBottom;
	}
}

// check if input is empty
function checkLastName() {
	if (lastName.value === "") {
		lastName.classList.add("invalid");
		lastName.nextElementSibling.classList.remove("hidden");
		lastName.setAttribute("placeholder", "");
		lastName.style.marginBottom = marginBottom;
	}
}

// check if input is empty and input is an email address
function checkEmail() {
	let invalid = true;
	const pattern =
		/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

	if (email.value.match(pattern)) invalid = false;

	if (email.value === "" || invalid) {
		email.classList.add("invalid");
		email.nextElementSibling.classList.remove("hidden");
		email.setAttribute("placeholder", "email@example.com");
		email.style.marginBottom = marginBottom;
	}
}

function checkPwd() {
	if (pwd.value === "" || invalid) {
		pwd.classList.add("invalid");
		pwd.nextElementSibling.classList.remove("hidden");
		pwd.style.marginBottom = marginBottom;
	}
}

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	checkFirstName();
	checkLastName();
	checkEmail();
	checkPwd();
});
