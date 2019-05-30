$(document).ready(function(){

    //nav fixa com transição da logo
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#logoOriginal').removeClass('ativo');
            $('#logoReduzida').addClass('ativo');
        } else {
            $('#logoReduzida').removeClass('ativo');
            $('#logoOriginal').addClass('ativo');
        }
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

    // botões "leia mais"
    let novaJanela;
    $('#bntInfoI').click(function () {
        novaJanela = window.open('https://bit.ly/2When8t', '_blank');
        if (novaJanela) {
        } else {
            alert("Desabilite o bloqueador de pop-up");
        }
    });

    $('#bntInfoII').click(function () {
        novaJanela = window.open('https://bit.ly/2VQ4wlO', '_blank');
        if (novaJanela) {
        } else {
            alert("Desabilite o bloqueador de pop-up");
        }
    });

    $('#bntInfoIII').click(function () {
        novaJanela = window.open('https://bit.ly/2K11f0K', '_blank');
        if (novaJanela) {

        } else {
            alert("Desabilite o bloqueador de pop-up");
        }
    });

    // botão de voltar// 
    $().click(function(){
        window.history.back
    });
});


