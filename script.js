const notesContainer = document.querySelector('.notes-container');
const createButton = document.getElementById('create');
const inputBox = document.querySelector('.input-box');
// const deleteOne = document.querySelector('.input-box img');

// localStorage.clear();

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML);
}

createButton.addEventListener('click', ()=>{
    let newInput = document.createElement('p');
    let img = document.createElement('img');
    newInput.className = 'input-box';
    newInput.setAttribute("contenteditable", true);
    img.src = 'images/delete.png';
    notesContainer.appendChild(newInput).appendChild(img);
    console.log(newInput);
});

notesContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'P'){
        var notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
});