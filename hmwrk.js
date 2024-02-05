

var selectElement= document.createElement('select');
var option1 = document.createElement("option");
option1.value ='1';
option1.text = 'Весна';

var option2= document.createElement('option');
option2.value = '2';
option2.text='Лето';


var option3 =document.createElement('option');
option3.value = '3';
option3.text = 'Осень';



var option4 =document.createElement('option');
option4.value = '4';
option4.text = 'Зима';


        selectElement.appendChild(option1);
        selectElement.appendChild(option2);
        selectElement.appendChild(option3);
        selectElement.appendChild(option4);


var dobavit = document.getElementById('body');
dobavit.appendChild(selectElement);