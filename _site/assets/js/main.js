var navTrigger = document.querySelector( '.menu-icon' );
navTrigger.addEventListener( 'click', toggleSplendidMobileNav, false );
window.onscroll = function() { splendidProgressBar() };
var header = document.getElementById( 'splendid-header' );
var sticky = header.getBoundingClientRect().top;
var timers = Array.from( document.querySelectorAll( '.countdown' ) );

// Check if a form has more than one input
const multiForm = (f) => f.elements.length > 1;

( function () {
	timers.forEach( t => {
		countDown(t);
	} );

	// Inject form assets
	if ( Array.from( document.querySelectorAll( 'form' ) ).some( multiForm ) == true ) {
		injectStyle( 'assets/css/global/forms.css' );
		injectScript( 'assets/js/forms.js' );
	}
} )();

// Toggle mobile navigation
function toggleSplendidMobileNav() {
	let navMenus = document.querySelectorAll( 'header nav' );

	for ( let n = 0; n < navMenus.length; n++ ) {
		if ( navMenus[n].classList.contains( 'hide' ) ) {
			navMenus[n].className = navMenus[n].className.replace( /\bhide\b/g, 'show' );
			navTrigger.className = navTrigger.className.replace( 'closed', 'open' );
			document.body.classList.add( 'overflow-hidden' );
		} else {
			navMenus[n].className = navMenus[n].className.replace( /\bshow\b/g, 'hide' );
			navTrigger.className = navTrigger.className.replace( 'open', 'closed' );
			document.body.classList.remove( 'overflow-hidden' );
		}
	}
}

// Start countdown timers
function countDown( t ) {
	let countdownDate = new Date( t.dataset.countdown ).getTime();
	let timerX = setInterval( () => {
		let now = new Date().getTime();
		let duration = countdownDate - now;
		t.querySelector(' .days' ).innerHTML = formatTimer( Math.floor( duration / ( 1000 * 60 * 60 * 24 ) ) );
		t.querySelector(' .hours' ).innerHTML = formatTimer( Math.floor( ( duration % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) ) );
		t.querySelector(' .minutes' ).innerHTML = formatTimer( Math.floor( ( duration % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) ) );
		t.querySelector(' .seconds' ).innerHTML = formatTimer( Math.floor( ( duration % ( 1000 * 60 ) ) / 1000 ) );
		if ( duration < 0 ) {
			clearInterval( timerX );
			t.querySelectorAll( 'div' ).forEach( num => num.innerHTML = '00' );
		}
	}, 1000 );
}

function formatTimer( n ) { return ( n < 10 ) ? '0' + n : n }

// Fill progress bar
function splendidProgressBar() {
	if ( document.getElementById( 'progress-bar' ) ) {
		let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		let scrolled = ( winScroll / height ) * 100;
		document.getElementById( 'progress-bar' ).style.width = scrolled + '%';
	}
	return;
}

// Get computed style value of element
function splendidStyleValue( el, style ) {
	return window.getComputedStyle( el, null ).getPropertyValue( style );
}

// Inject a stylesheet
function injectStyle( path ) {
	let node = document.head;
	let css = document.createElement( 'link' );
	setAttributes( css, { 'rel': 'stylesheet', 'type': 'text/css', 'href': path } );
	node.appendChild( css );
}

// Inject a script
function injectScript( path ) {
	let node = document.body;
	let script = document.createElement( 'script' );
	setAttributes( script, { 'type': 'text/javascript', 'src': path } );
	node.appendChild( script );
}

// Set multiple attributes
function setAttributes( el, attrs ) {
	for ( let key in attrs ) {
		el.setAttribute( key, attrs[key] );
	}
}