$(document).ready(function(){
    $(document).on("click",function(e){
        if(e.target.id !== 'sidebar' && e.target.id !== 'hamburger' && !$(e.target).hasClass('dropdown') && !e.target.matches("#sidebar nav a > span","#sidebar nav a > i")){
            $("#sidebar").removeClass("active");
        }
    
        if(!$(e.target).hasClass('dropdown-toggle') && !$(e.target).hasClass('dropdown-menu')){
            $(".dropdown").removeClass("active");
        }
        if(!$(e.target).hasClass(".modal") && $(e.target).data('toggle')!="modal"){
            $('.modal').removeClass('active');
        }
    })

    // $('main').height($("#sidebar").prop('scrollHeight')+10+'px');
    $("#sidebar nav a.dropdown").on("click",function(){
        $(this).toggleClass("open");
        $(this).find("+.dropdown-menu").slideToggle();
        // $(this).find("+.dropdown-menu").slideToggle(function(){
        //     $('main').height($("#sidebar").prop('scrollHeight')+10+'px');
        // });
    });

    $('#hamburger').on("click",function(){
        $("#sidebar").addClass("active");
    });

    $('#close').on("click",function(){
        $("#sidebar").removeClass("active");
    });
    
    $('.form-control').on('input',function(){
        if($(this).val().length > 0){
            $(this).parent().addClass("active");
        }else{
            $(this).parent().removeClass("active");
        }
    })

    $(".card-header.tabs a").on("click",function(e){
        e.preventDefault();
        let tabPanel=$($(this).attr("href"));
        let tab=$(this);
        tab.siblings().removeClass("active");
        tabPanel.siblings().removeClass("active");
        tab.addClass("active");
        tabPanel.addClass("active");
    })

    let cardBbody=$(".card.collapsible.active .card-body");
    if(cardBbody.is(':hidden')){
        cardBbody.slideDown();
    }
    $(".card.collapsible").on("click",function(){
        $(this).toggleClass("active");
        $(this).find(".card-body").slideToggle();
    })

    $(".dropdown-toggle").on("click",function(e){
        let dropdownMenu = $(this).parent();
        dropdownMenu.toggleClass("active");
    })

    $("a[data-toggle='modal']").on("click",function(e){
        e.preventDefault();
        let modal_id = $(this).attr('href');
        $(modal_id).addClass('active');
    })
    $('#modal-close').on('click',function(){
        $(this).parent().parent().removeClass('active');
    })
});