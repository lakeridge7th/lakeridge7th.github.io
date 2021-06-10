const PAGE_VERSION = '0.0.1';

(function() {
	'use strict';

	let stateCheck = setInterval(() => {
		if (document.readyState === 'complete') {
            console.log('EisDEBUG: Start script.js, v.' + PAGE_VERSION + '.');
            startup();
            clearInterval(stateCheck);
		}
	}, 100);
})();

function startup() {
    addHTML();
    // addButtons
    //  for collapsible: 
}

function addHTML() {
    // addAnnouncements
    addSacrament();
    // addClasses
    addLeadership();
    // addSpotlights
    // addArchives
}