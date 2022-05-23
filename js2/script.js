const btnNext= document.querySelector('form .grp-btn .next');
const btnPrev= document.querySelector('form .grp-btn .previus');
const indicador= document.querySelector('.indicador .line span');
const indicadorItems= document.querySelectorAll('.indicador p');
const form= document.querySelector('form');
const allTab=document.querySelectorAll('form .tab');
let i=0;

    allTab[i].classList.add('show');
    indicador.style.width=i;   
    indicadorItems[i].classList.add('active');    

    if(i===0){
        btnPrev.style.display='none';
    }else{
        btnPrev.style.display='block';
    }

btnNext.addEventListener('click', function(){
    // const selectAll=allTab[i].selectInd('select');
    // if(selectAll[j].select)
    // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    const allInputPerTab= allTab[i].querySelectorAll('input');
    for(let j=0; j<allInputPerTab.length;j++){
        allInputPerTab[j].addEventListener('input',function(){
        });

        if(allInputPerTab[j].value === '' || !allInputPerTab[j].checkValidity()){
            allInputPerTab[j].style.borderColor='red';
            return false;
        }else{
            allInputPerTab[j].style.borderColor='#ddd';
        }
    }
    // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    i+=1;
    if(i>=allTab.length){
        form.submit();
        return false;
    }else{  

        for(let j=0; j< allTab.length; j++){
            allTab[j].classList.remove('show');
            indicadorItems[j].classList.remove('active');            
        }

        for(let j=0; j< i; j++){
            indicadorItems[j].classList.add('active');            
            // allTab[j].classList.remove('show');
        }

        allTab[i].classList.add('show');
        indicador.style.width=`${i*33.339}%`;
        indicadorItems[i].classList.add('active');        
    }
    // :::::::::::::::::::::::::::::::::::::::::::
    // Cambia los estado del botton siguiente, en el proceso 1 se oculta el botton atras
    if(i===0){
        btnPrev.style.display='none';
    }else{
        btnPrev.style.display='block';
    }
    // :::::::::::::::::::::::::::::::::::::::::::
    // Ultimo proceso cambia el botton siguiente a enviar
    if(i===allTab.length-1){
        btnNext.innerHTML='Generar';
    }else{
        // Proceso para adelante cambia el texto
        btnNext.innerHTML='Siguiente'
    }
    // :::::::::::::::::::::::::::::::::::::::::::
});

btnPrev.addEventListener('click',function(){
    i-=1;
    for(let j=0; j< allTab.length; j++){
        allTab[j].classList.remove('show');
        indicadorItems[j].classList.remove('active');        
    }

    for(let j=0; j< i; j++){
        indicadorItems[j].classList.add('active');        
        // allTab[j].classList.remove('show');
    }

    allTab[i].classList.add('show');
    indicador.style.width=`${i*33.3}%`;
    indicadorItems[i].classList.add('active');

    // :::::::::::::::::::::::::::::::::::::::::::
    if(i===0){
        btnPrev.style.display='none';
    }else{
        btnPrev.style.display='block';
    }
    // :::::::::::::::::::::::::::::::::::::::::::    
    if(i===allTab.length+1){
        btnNext.innerHTML='Siguiente';
    }else{
        // Proceso para atras cambia el texto
        btnNext.innerHTML='Siguiente'
    }
});