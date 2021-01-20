// Functions
function sidebarReveal() {
    	$('.content').toggleClass('show-sidebar');
}

function sectionReveal(sectionTitle) {
    	$(sectionTitle).parent().toggleClass('collapsed');
}

function makeActive(item) {
		$('.main-nav li').removeClass('active');
    	$(item).addClass('active');
}

function mobileNavReveal() {
    	$('header').toggleClass('show-mobile-nav');
}

function infoBarReveal() {
    	$('.page-content').toggleClass('show-info-bar');
}

function switchBoards() {
    	$('.vs-game').toggleClass('switch');
}

function darkThemeReveal() {
    	$('body').toggleClass('dark-theme');
}

function controlsReveal() {
    	$('.controls').toggleClass('active');
}

// On Page Load
$(document).ready(function () {

	// Hide and Reveal Sidebar
	$('.toggle-sidebar').click(function(){ sidebarReveal(); });
	$('.toggle-mobile').click(function(){ sidebarReveal(); });
	$('.sidebar section h3').click(function(){ sectionReveal(this); });
	
	// Make Menu Items Active
	$('.main-nav li').click(function(){ makeActive(this); });
	
	// Hide and Reveal Mobile Nav
	$('.toggle-mobile-nav').click(function(){ mobileNavReveal(); });
	
	// Hide and Reveal Info Bar
	$('.toggle-info-bar').click(function(){ infoBarReveal(); });
	
	// Switch between Vs Boards
	$('.vs .turn-signal').click(function(){ switchBoards(); }); 
	
	// Switch to Dark Theme
	$('.toggle-dark-theme').click(function(){ darkThemeReveal(); }); 
	
	// Hide and Reveal Controls
	$('.icon-controls').click(function(){ controlsReveal(); }); 
});