let searchBox = document.querySelector('#search-box');
let images =document.querySelectorAll('.bloque');

searchBox.oninput = () => {
    let value =searchBox.value;
    images.forEach(filter =>{
        let title =filter.getAttribute('data-title');
        var up = value;
        var low = up.toLowerCase();
        var remove =remove_caracter(low);
        if(remove == title){
            images.forEach(hide => hide.style.display = 'none')
            filter.style.display = 'block';
    
        }

        if(value ==''){
            filter.style.display = 'block';
        }

    });
};

//función para eliminar tildes de las minusculas
function remove_caracter(texto){
    var aMinus = texto.replace(/[á]/g,'a');
    var eMinus = aMinus.replace(/[é]/g,'e');
    var iMinus = eMinus.replace(/[í]/g,'i');
    var oMinus = iMinus.replace(/[ó]/g,'o');
    var uMinus = oMinus.replace(/[ú]/g,'u');

    return uMinus;

};