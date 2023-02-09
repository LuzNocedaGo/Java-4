var box_1 = document.querySelectorAll('.box_1');

for (var i = 0; i < box_1.length; i++) {
    box_1[i].style.width = '50px';
    box_1[i].style.height = '50px';
    box_1[i].style.backgroundColor = 'red';
    box_1[i].style.marginTop = '20px'
    if(i % 2 === 0){
    box_1[i].style.border = '10px solid orange'
    }
}


var box_2 = document.querySelectorAll('.box_2');

for (var i = 0; i < box_2.length; i++) {
    box_2[i].style.width = '100px';
    box_2[i].style.height = '100px';
    box_2[i].style.backgroundColor = 'blue';
    box_2[i].style.marginTop = '20px'
    if(i % 2 === 0){
        box_2[i].style.border = '10px solid green'
    }
}
