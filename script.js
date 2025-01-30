const itemSection = document.querySelector('.listSection');

const addButton = document.getElementById('addButton');

const crossIcon = '&#215';
const tickMark = '&#10004';

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

    removeDiv.addEventListener('click', () => {
        list.remove();
    });

    tickIcon.addEventListener('click', () => {
        if(tickIcon.innerHTML.trim() === "")
        {
            tickIcon.innerHTML = tickMark;
            list.style.textDecoration = "line-through";
            list.style.fontStyle = "italic";
            tickIcon.style.backgroundColor = "lightgreen";
        }
        else
        {
            tickIcon.innerHTML = "";
            list.style.textDecoration = "none";
            list.style.fontStyle = "normal";
            tickIcon.style.backgroundColor = "white";
        }
    });

    }

    document.getElementById('inputSpace').value = "";


});