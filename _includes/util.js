// Obfuscate contact info
function contact(e, i = "email") {
	if (i == "email" || i == "e") {
		let email = "{{ site.author.email }}";
		let encodedEmail = btoa(email);
		let decodedEmail = atob(encodedEmail);
		e.setAttribute('href', 'mailto:' + decodedEmail);
		return decodedEmail;
	} else if (i == "phone" || i == "telephone" || i == "p" || i == "t") {
		let phone = "{{ site.author.phone }}";
		let encodedPhone = btoa(phone);
		let decodedPhone = atob(encodedPhone);
		e.setAttribute('href', 'tel:' + decodedPhone);
		return decodedPhone;
	}
}