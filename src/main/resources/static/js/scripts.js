/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});




$(document).ready(function(){

    window.FakeLoader.init();


    function reset(div){
        //Hide all content
        var idContent = div.attr("data")
        $("[id*=\"ob_content\"]").hide();
        // Show hover content
        $("#"+idContent).show();

        //reset all other div online_banking
        $(".online_banking").css("background-color","white");
        $(".online_banking").css("color","black");
    }

    function resetDesign(div){
        //reset all other div online_banking
        $(".online_banking").css("background-color","white");
        $(".online_banking").css("color","black");
    }

    $(".online_banking").on( "click", function() {
        reset($(this));
        $(this).css("background-color","#0564C8");
        $(this).css("color","white");
    });

    $("#ob_content1 .card-body  .close_button").on("click", function (e){
        $("#ob_content1").hide();
    });

    $("#ob_content2 .card-body  .close_button").on("click", function (e){
        $("#ob_content2").hide();
    });

    $("#ob_content3 .card-body  .close_button").on("click", function (e){
        $("#ob_content3").hide();
    });

    $("#ob_content4 .card-body  .close_button").on("click", function (e){
    $("#ob_content4").hide();
    });

    $("#ob_content5 .card-body  .close_button").on("click", function (e){
    $("#ob_content5").hide();
    });

    $("#ob_content6 .card-body  .close_button").on("click", function (e){
        $("#ob_content6").hide();
    });



    var loc = window.location.pathname;

    $('#sidebar_left').find('a').each(function() {
        // console.log($(this).attr('href') )
        $(this).toggleClass('active', $(this).attr('href') == loc);
        if($(this).attr('href') == loc){
            var data =  $(this).find("img")[0].getAttribute("data");
            $(this).find("img")[0].setAttribute("src", '/img/icon/' + data + '_hover.png');
            // console.log(data)
        }
    });







    $("[id*='ob_content'] a.btn").click(function (e){
        e.preventDefault();
        console.log($(this).attr('href'))
        var href = $(this).attr('href');

        $.confirm({
            title: 'Confirm!',
            content: 'You will be transferred to our partner’s secure website.\n' +
                'Trusted ebanking is brought to you by our most secured financial partners.\n' +
                'Although Enovvio has a relationship with financial partners, Enovvio does not\n' +
                'provide the products and services on their website. Please review our\n' +
                'partner\'s privacy and security policies and terms and conditions on their\n' +
                'website.!',
            buttons: {
                confirm: function () {
                    window.location.href = href;
                },
                cancel: function () {
                    $.alert('Canceled!');
                },
            },
            columnClass: 'col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',

        });
    });


});
