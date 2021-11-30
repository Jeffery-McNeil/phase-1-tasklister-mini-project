document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target.new_task_description.value)
    form.reset()
  })
})

function handleToDo(todo){
  let li = document.createElement('li');
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${todo} `;
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li);
} 

function handleDelete(e){
  e.target.parentNode.remove()
}