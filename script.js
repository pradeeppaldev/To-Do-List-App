const itemSection = document.querySelector('.listSection');

const addButton = document.getElementById('addButton');

const crossIcon = '&#215';

const inputValue = document.getElementById('inputSpace').value;

addButton.addEventListener('click', () => {

    const inputValue = document.getElementById('inputSpace').value;

    if(inputValue.trim() !== ""){
    
    const list = document.createElement('div');
    list.setAttribute('id','listBox')

    const tickIcon = document.createElement('button');
    tickIcon.setAttribute('id' , 'tick');

    list.textContent = inputValue;

    const removeDiv = document.createElement('button');
    removeDiv.setAttribute('id','removediv');

    itemSection.append(list);
    list.append(tickIcon);
    list.append(removeDiv);
    removeDiv.innerHTML = crossIcon;

    }

});