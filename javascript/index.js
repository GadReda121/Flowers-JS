$(document).ready(function(){
    
    // Start JQ Codes
    
    // Start Navbar
    $(window).scroll(function(){
        if ( this.scrollY > 20 ){
            $(".header").css("backgroundColor","#e84393");
            $(".header .logo h3 a").css("color","#f8f9fa");
            $(".header .menu ul li a").css("color","#f8f9fa");
            $(".header .tools i").css("color","#f8f9fa");
        } else{
            $(".header").css("backgroundColor","#f8f9fa");
            $(".header .logo h3 a").css("color","#e84393");
            $(".header .menu ul li a").css("color","#e84393");
            $(".header .tools i").css("color","#1A1A1A");
        }
    });
    // End Navbar

    // Start Menu

    $(".fa-bars").click(function(){
        $(".fa-bars").css("display","none");
        $(".menu-mob").slideDown(1000);
        $(".fa-xmark").css("display","inline-block");
    });

    $(".fa-xmark").click(function(){
        $(".fa-xmark").css("display","none");
        $(".menu-mob").slideUp(1000);
        $(".fa-bars").css("display","inline-block");
    });
    $(".menu-mob ul li a").click(function(){
        $(".fa-xmark").css("display","none");
        $(".menu-mob").slideUp(1000);
        $(".fa-bars").css("display","inline-block");
    });

    // End Menu

    //  StART Product

    // personal
    $(".fa-user").click(function(){
        $(".personal").slideToggle(1000);
    });

    // Heart
    $(".tools .fa-heart").click(function(){

        $(".hearthead").slideToggle(1000);
        
        if ($(".hearthead").hasClass("product1")){
            console.log("right");
        } else{
            $(".hearthead").text("Please , Put Something !")
        }

    });

    // Child 1
    $(".parentproduct .product-child1 .img-heartbuying .heartsymbol").click(function(){
        $(".product-child11").css("display","grid");
        $(".hearthead").html($(".product-child11"));
    });
    // Child 2
    $(".parentproduct .product-child2 .img-heartbuying .heartsymbol").click(function(){
        $(".product-child22").css("display","grid");
        $(".hearthead").html($(".product-child22"));
    });
    // Child 3
    $(".parentproduct .product-child3 .img-heartbuying .heartsymbol").click(function(){
        $(".product-child33").css("display","grid");
        $(".hearthead").html($(".product-child33"));
    });
    // Child 4
    $(".parentproduct .product-child4 .img-heartbuying .heartsymbol").click(function(){
        $(".hearthead").html($(".product-child44"));
        $(".product-child44").css("display","grid")
    });
    // Child 5
    $(".parentproduct .product-child5 .img-heartbuying .heartsymbol").click(function(){
        $(".hearthead").html($(".product-child55"));
        $(".product-child55").css("display","grid")
    });
    // Child 6
    $(".parentproduct .product-child6 .img-heartbuying .heartsymbol").click(function(){
        $(".hearthead").html($(".product-child66"));
        $(".product-child66").css("display","grid")
    });
    // Child 7
    $(".parentproduct .product-child7 .img-heartbuying .heartsymbol").click(function(){
        $(".hearthead").html($(".product-child77"));
        $(".product-child77").css("display","grid")
    });
    // Child 8
    $(".parentproduct .product-child8 .img-heartbuying .heartsymbol").click(function(){
        $(".hearthead").html($(".product-child88"));
        $(".product-child88").css("display","grid")
    });
    // Child 9
    $(".parentproduct .product-child9 .img-heartbuying .heartsymbol").click(function(){
        $(".hearthead").html($(".product-child99"));
        $(".product-child99").css("display","grid")
    });
    // remove from card
    $(".product-child11 a").click(function(e){
        e.preventDefault();
        $(".product-child11").slideToggle(1000);
        $(".hearthead").slideUp(1500);
    });
    $(".product-child22 a").click(function(e){
        e.preventDefault();
        $(".product-child22").slideToggle(1000);
        $(".hearthead").slideUp(1500);
    });
    $(".product-child33 a").click(function(e){
        e.preventDefault();
        $(".product-child33").slideToggle(1000);
        $(".hearthead").slideUp(1500);
    });
    $(".product-child44 a").click(function(e){
        e.preventDefault();
        $(".product-child44").slideToggle(1000);
        $(".hearthead").slideUp(1500);
    });
    $(".product-child55 a").click(function(e){
        e.preventDefault();
        $(".product-child55").slideToggle(1000);
        $(".hearthead").slideUp(1500);
    });
    $(".product-child66 a").click(function(e){
        e.preventDefault();
        $(".product-child66").slideToggle(1000);
        $(".hearthead").slideUp(1500);
    });
    $(".product-child77 a").click(function(e){
        e.preventDefault();
        $(".product-child77").slideToggle(1000);
        $(".hearthead").slideUp(1500);
    });
    $(".product-child88 a").click(function(e){
        e.preventDefault();
        $(".product-child88").slideToggle(1000);
        $(".hearthead").slideUp(1500);
    });
    $(".product-child99 a").click(function(e){
        e.preventDefault();
        $(".product-child99").slideToggle(1000);
        $(".hearthead").slideUp(1500);
    });
    // products
    $(".parentproduct .product").hover(function(){
        $(this).css("transform","translateY(-15px)");
        $(this).siblings().css("filter","blur(2px)");
        $(this).children().first().next().css("display","grid");
        $(this).children().first().next().animate({
            right:"5%"
        });
    },function(){
        $(this).css("transform","translateY(0px)");
        $(this).siblings().css("filter","blur(0px)");
        $(this).children().first().next().css("display","none");
        $(this).children().first().next().animate({
            right:"-5%"
        });
    });
    //  END Product

    // Start REview
    $(".review-parent .review").hover(function(){
        $(this).css("transform","translateY(-15px)");
        $(this).siblings().css("filter","blur(2px)");
        $(this).css("cursor","pointer");
        },function(){
        $(this).css("transform","translateY(0px)");
        $(this).siblings().css("filter","blur(0px)");
        $(this).css("cursor","pointer");
        });
    // End REview

    // End JQ Codes

});