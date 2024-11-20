import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/header-hover-items.css';
import '../styles/components/section.css';
import '../styles/components/floater.css';
import '../styles/components/grid-section.css';
import '../styles/components/grid-card.css';
import '../styles/components/footer.css';

import hamburger from './utils/hamburger';
import footer from './utils/footer';

hamburger();
footer();

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Modern approach
  const docHeight = document.body.offsetHeight;
  const windowHeight = window.innerHeight;
  
  // Calculate the scroll percentage (0 to 1)
  const scrollPercentage = scrollPosition / (docHeight - windowHeight);
  
  if(scrollPercentage <= 0.25){
    // Set the CSS custom property to update styles based on scroll
    document.body.style.setProperty('--scroll', scrollPercentage);
  }
}, false);


$(document).ready(function () {
  $("#realme-Store").hover(
    function(){
      $("#new-launch").css('display', 'none');
      $("#realme-phone").css('display', 'none');
      $("#NARZO-phone").css('display', 'none');
      $("#realme-audio").css('display', 'none');
      $("#realme-accessories").css('display', 'none');
      $("header").css('background','rgba(0,0,0,0)');
    }
  );

  $("#New-Launch").hover(
    function () {
      $("#new-launch").css('display', 'flex');
      $("#realme-phone").css('display', 'none');
      $("#NARZO-phone").css('display', 'none');
      $("#realme-audio").css('display', 'none');
      $("#realme-accessories").css('display', 'none');
      $("header").css('background','rgba(0,0,0,1)');
    }
  );
  $("#new-launch").hover(
    function () {
      $("#new-launch").css('display', 'flex');
      $("header").css('background','rgba(0,0,0,1)');
    },
    function () {
      $("#new-launch").css('display', 'none');
      $("header").css('background','rgba(0,0,0,0)');

    });
  
  $('#realme-Phone').hover(
    function(){
      $("#new-launch").css('display', 'none');
      $("#realme-phone").css('display', 'flex');
      $("#NARZO-phone").css('display', 'none');
      $("#realme-audio").css('display', 'none');
      $("#realme-accessories").css('display', 'none');
      $("header").css('background','rgba(0,0,0,1)');
    }
  );  
  $("#realme-phone").hover(
    function () {
      $("#realme-phone").css('display', 'flex');
      $("header").css('background','rgba(0,0,0,1)');
    },
    function () {
      $("#realme-phone").css('display', 'none');
      $("header").css('background','rgba(0,0,0,0)');
    }
  );

  $('#NARZO-Phone').hover(
    function(){
      $("#new-launch").css('display', 'none');
      $("#realme-phone").css('display', 'none');
      $("#NARZO-phone").css('display', 'flex');
      $("#realme-audio").css('display', 'none');
      $("#realme-accessories").css('display', 'none');
      $("header").css('background','rgba(0,0,0,1)');
    }
  );  
  $("#NARZO-phone").hover(
    function () {
      $("#NARZO-phone").css('display', 'flex');
      $("header").css('background','rgba(0,0,0,1)');
    },
    function () {
      $("#NARZO-phone").css('display', 'none');
      $("header").css('background','rgba(0,0,0,0)');
    }
  );

  $('#realme-Audio').hover(
    function(){
      $("#new-launch").css('display', 'none');
      $("#realme-phone").css('display', 'none');
      $("#NARZO-phone").css('display', 'none');
      $("#realme-audio").css('display', 'flex');
      $("#realme-accessories").css('display', 'none');
      $("header").css('background','rgba(0,0,0,1)');
    }
  );  
  $("#realme-audio").hover(
    function () {
      $("#realme-audio").css('display', 'flex');
      $("header").css('background','rgba(0,0,0,1)');
    },
    function () {
      $("#realme-audio").css('display', 'none');
      $("header").css('background','rgba(0,0,0,0)');
    }
  );

  $('#realme-Accessories').hover(
    function(){
      $("#new-launch").css('display', 'none');
      $("#realme-phone").css('display', 'none');
      $("#NARZO-phone").css('display', 'none');
      $("#realme-audio").css('display', 'none');
      $("#realme-accessories").css('display', 'flex');
      $("header").css('background','rgba(0,0,0,1)');
    }
  );  
  $("#realme-accessories").hover(
    function () {
      $("#realme-accessories").css('display', 'flex');
      $("header").css('background','rgba(0,0,0,1)');
    },
    function () {
      $("#realme-accessories").css('display', 'none');
      $("header").css('background','rgba(0,0,0,0)');
    }
  );

});