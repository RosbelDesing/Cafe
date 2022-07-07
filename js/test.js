let searchBox = document.querySelector('#search-box');
let images =document.querySelectorAll('.container .image-container .image');

searchBox.oninput = () => {
    let value =searchBox.value;
    images.forEach(filter =>{
        let title =filter.getAttribute('data-title');
        var up = value;
        var low = up.toLowerCase();
        if(low == title){
            images.forEach(hide => hide.style.display = 'none')
            filter.style.display = 'block';
    
        }

        if(value ==''){
            filter.style.display = 'block';
        }

    });
};