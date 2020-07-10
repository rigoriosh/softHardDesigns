document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 800 });
ScrollReveal().reveal('.cards-banner-one', { delay: 800 });
ScrollReveal().reveal('.cards-banner-two', { delay: 800 });


var appWeb = document.getElementById('idAppWeb');
var appWAppMovil = document.getElementById('idAppMovil');
var Consultorias = document.getElementById('idConsultorias');
var Container = document.getElementById('idContainer');

var overlay = document.getElementById('idOverlay');
var overlay2 = document.getElementById('idOverlay2');
var popup1 = document.getElementById('idPopup1');
var popup2 = document.getElementById('idPopup2');
var popup3 = document.getElementById('idPopup3');
var btnClosePopup = document.getElementById('idBtnClosePopup');

document.getElementById('closed').addEventListener('click', () =>{
    popup3.style.display = 'none';
    overlay2.style.display = 'none';
});

//Container.addEventListener('click',function () {
document.querySelector("#idContainer").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show"); 
});

overlay.addEventListener('click', function () {
    Container.style.display = 'block';
    overlay.style.display = 'none';
});

appWeb.addEventListener('click', function () {
    //overlay.classList.add('active');
    //Container.style.display = 'none';
    overlay.style.display = 'flex';
    popup2.style.display = 'none';
    popup3.style.display = 'none';
    popup1.style.display = 'flex';
});

appWAppMovil.addEventListener('click', function () {
    //overlay.classList.add('active') ;
    //Container.style.display = 'none';
    overlay.style.display = 'flex';
    popup1.style.display = 'none';
    popup3.style.display = 'none';
    popup2.style.display = 'flex';
});

Consultorias.addEventListener('click', function () {
    //overlay.classList.add('active') ;
    //Container.style.display = 'none';
    overlay2.style.display = 'flex';
    popup1.style.display = 'none';
    popup2.style.display = 'none';
    popup3.style.display = 'flex';
});

idOverlay.addEventListener('click', function () {
    //overlay.classList.remove('active');
});

/* btnClosePopup.addEventListener('click', function () {

}); */

(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    $("#boton").click(function () {        
        popup3.style.display = 'none';
        overlay2.style.display = 'none';
        });

    
    

})(jQuery);
