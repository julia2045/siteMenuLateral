function Menulateral(){
    function toggleMenu(){
        const buttonMenu = document.querySelector('.buttonMenu');
        //concatenar o botão com o conteudo
        const content = document.querySelector(`[data-id="${buttonMenu.id}"]`);
        //informar que essa função faz com que tire ou adicione a classe ao elemento 
        content.classList.toggle('active');  
    }
    //selecionando os conteudos dos botões para executar a função de fechar e abrir o menu
    const menuToggle = document.querySelectorAll('.menuToggle');
    //separando cada elemento para adicionar a função de click
    menuToggle.forEach((el) =>{
        //adicionando a função de click a cada elemento
        el.addEventListener('click', toggleMenu);
    })

    //selecionar o conteudo do  menu
    const menu = document.querySelector('.menu');
    console.log(menu)
    //selecionar todo o body
    const body = document.querySelector('body');
    console.log(body)

    //adicionar um evento de click ao body
    body.addEventListener('click', clickBody);

    //fazer uma função onde o se clicar no body e menu tiver a classe de active remover ela
    function clickBody(){
        if(menu.classList.contains('active')){
            menu.classList.remove('active');
        }
    }
    // selecionar o elemento do botão de abrir e fechar o menu
    const buttonMenu = document.querySelector('.buttonMenu');
    //adicionar um evento de click a ele
    buttonMenu.addEventListener('click', (event)=>{
        //impedir que ele execute a ação anterior passada
        //Impede a propagação do evento por seus respectivos listeners.
        event.stopPropagation();
    })

}
Menulateral()

function popUpClose(){
    //selecionars os botões de abrir e fechar a classe
 const popUpToggle = document.querySelectorAll('.popUpToggle');
 //separar cada elemento
 popUpToggle.forEach((el)=>{
    //adicionar um evento de click a cada elemento
    el.addEventListener('click',togglePopUp);
 })
 function togglePopUp(){
    //declarar na função o toggle(alternar as classes)
    document.querySelector('.popUp').classList.toggle('active');
 }


 function remove(){
    //  fazer uma função onde verificamos se o elemento possui a classe 
    if(popUp.classList.contains('active')){
        //se possuir removemos ela
        popUp.classList.remove('active');
    }
 }
//selecionar todo o elemento do popUp e adicionar um evento de click
const popUp = document.querySelector('.popUp');
popUp.addEventListener('click',remove);
//selecionar somente o conteudo do popUP 
const popUpContent = document.querySelector('.popUpContent')
//adicionar um evento de click e interromper a ação anterior
popUpContent.addEventListener('click', (event)=>{
    //Impede a propagação do evento por seus respectivos listeners.
    event.stopPropagation();
})

}

popUpClose()


function teste(){
    function ttt(){
        function lll(){
        
        }
        lll()
    }
}
