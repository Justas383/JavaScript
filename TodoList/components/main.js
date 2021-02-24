const addForm = document.querySelector('.add');
const list = document.querySelector('.list-group');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
const html = `<li class="list-group-item">
<span>${todo}</span>
<i class="delete">trash</i>
</li>`;

list.innerHTML += html;
};

addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo =  addForm.add.value.trim();
if(todo.length){
    generateTemplate(todo);
    addForm.reset();
} else {console.log("Please enter input")}
});

//delete todos

list.addEventListener('click', e => {
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
});

const filterTodos = (term) => {
(Array.from(list.children) //is html kolekcijos mes padarome array, kad butu galima naudoti array metodus.
.filter((todo) =>{
    //return todo.textContent
    console.log(todo.textContent);
    return true;
})
};

search.addEventListener('keyup',() => {
const term = search.value.trim();
filterTodos(term);

})