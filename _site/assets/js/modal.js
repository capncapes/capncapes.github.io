let modal = document.getElementById('modal');
let close = document.getElementById('close');
let modalTimeout;

( () => {
	console.log(window.location.pathname);
	if (!getCookie(window.location.pathname)) {
		modal.className = modal.className.replace('opacity-0', 'opacity-100');
		document.querySelectorAll('body > *:not(#modal)').forEach(el => { el.style.filter = 'blur(5px)' });
		modalTimeout = setTimeout(() => {
			if (modal.classList.contains('hidden')) {
				modal.className = modal.className.replace('hidden', 'block');
				document.body.classList.add('overflow-hidden');
			}
		}, 500);
		document.cookie = window.location.pathname + '=1';
	}
})();

close.addEventListener('click', () => {
	modal.className = modal.className.replace('opacity-100', 'opacity-0');
	document.querySelectorAll('body > *:not(#modal)').forEach(el => { el.style.filter = 'blur(0)' });
	modalTimeout = setTimeout(() => {
		document.body.classList.remove('overflow-hidden');
		modal.className = modal.className.replace('block', 'hidden');
	}, 500);
});