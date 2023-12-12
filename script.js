// Carousel
var slideIndex = 1;
showSlides (slideIndex);

// Next & prev control
function plusSlides (index) {
  showSlides ((slideIndex += index));
}

// Thumbnail image controls
function currentSlide (index) {
  showSlides ((slideIndex = index));
}

function showSlides (index) {
  var slides = document.getElementsByClassName ('slides');
  var tab = document.getElementsByClassName ('tab-link');
  var i;

  // Reset all slides to hide them
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Reset all tab to remove 'current' class
  for (i = 0; i < tab.length; i++) {
    tab[i].classList.remove ('current');
  }

  // Adjust index for circular carousel
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = 'block';

  // Add 'current' class to the corresponding tab
  tab[slideIndex - 1].classList.add ('current');
}

// Tabs
var tabIndex = 1;
showTabs (tabIndex);

// Thumbnail image controls
function currentTab (index) {
  showTabs ((tabIndex = index));
}

function showTabs (index) {
  var tabs = document.getElementsByClassName ('tabs');
  var link = document.getElementsByClassName ('tabs-link');
  var i;

  // Reset all tabs to hide them
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }

  // Reset all tab to remove 'font-gradient' class
  for (i = 0; i < link.length; i++) {
    link[i].classList.remove ('font-gradient');
    link[i].classList.add ('tab-opacity');
  }

  // Adjust index for circular carousel
  if (index > tabs.length) {
    tabIndex = 1;
  }
  if (index < 1) {
    tabIndex = tabs.length;
  }

  // Display the current slide
  tabs[tabIndex - 1].style.display = 'block';

  // Add 'font-gradient' class to the corresponding tab
  link[tabIndex - 1].classList.add ('font-gradient');
  link[tabIndex - 1].classList.remove ('tab-opacity');
}

// Tabs 2
var tabIndex2 = 1;
showTabs2 (tabIndex2);

// Thumbnail image controls
function currentTab2 (index) {
  showTabs2 ((tabIndex2 = index));
}

function showTabs2 (index) {
  var tabs2 = document.getElementsByClassName ('tabs2');
  var link2 = document.getElementsByClassName ('tabs-link2');
  var i;

  // Reset all tabs to hide them
  for (i = 0; i < tabs2.length; i++) {
    tabs2[i].style.display = 'none';
  }

  // Reset all tab to remove 'font-gradient' class
  for (i = 0; i < link2.length; i++) {
    link2[i].classList.remove ('font-gradient');
    link2[i].classList.add ('tab-opacity');
  }

  // Adjust index for circular carousel
  if (index > tabs2.length) {
    tabIndex2 = 1;
  }
  if (index < 1) {
    tabIndex2 = tabs2.length;
  }

  // Display the current slide
  tabs2[tabIndex2 - 1].style.display = 'block';

  // Add 'font-gradient' class to the corresponding tab
  link2[tabIndex2 - 1].classList.add ('font-gradient');
  link2[tabIndex2 - 1].classList.remove ('tab-opacity');
}
