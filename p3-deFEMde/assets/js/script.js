$(document).ready(function(){

    //nav fixa com transição da logo
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#logoOriginal').removeClass('ativo');
            $('#logoReduzida').addClass('ativo');
            $('.nav').addClass('navSombra');
        } else {
            $('#logoReduzida').removeClass('ativo');
            $('#logoOriginal').addClass('ativo');
            $('.nav').removeClass('navSombra');
        }
    });

    //botão voltar ao topo
    $(window).scroll(function(){
        var width = $(window).width();
        if(width <= '420px'){
            console.log("oi")
            if($(this).scrollTop()>360){
                $('.botaoTopo').fadeIn();
            }
            else {
                $('.botaoTopo').fadeOut();
                $('.botaoTopo').hide();
            }
        }

        else {
            if($(this).scrollTop()>360 && $(this).scrollTop()<6100){
                $('.botaoTopo').fadeIn();
            }
            else {
                $('.botaoTopo').fadeOut();
                $('.botaoTopo').hide();
            }
        }  
    });

    //card oQueFazemos
    $("#scroll-next").click(function() {
        $('html, body').animate({
            scrollTop: $("#advocacy").offset().top
        }, 1500);
    });

    //card áreas de atuação
    $(document).on("click", ".containerDiv--projetos", function(){
        $(this).find('.conteudoSecundario').slideToggle(500, function () {
        });
    });

    // scroll suave para seções
    $('.navMenu--link').click(function(event){    
        if(this.hash !== ""){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop:$(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    })

    //abre menu hamburguer
    $('.menuHamburguer').click(function(event){  
        $('.menuDropdown').slideToggle();     
    });

    // scroll suave para seções a partir do menu hamburguer
    $('.menuDropdown--link').click(function(event){  
        $('.menuDropdown').slideToggle();
        if(this.hash !== ""){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop:$(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }        
    });

});