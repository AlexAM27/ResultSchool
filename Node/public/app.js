document.addEventListener('click', (event) => {
  if(event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id
    remove(id).then(()=> {
      event.target.closest('li').remove()
    })
  }
  if(event.target.dataset.type === 'edit') {
    const newNote = prompt('Enter new note');
    console.log(newNote)
    if(newNote) {
      const id = event.target.dataset.id
      edit(id, newNote)
    }
  }
})

async function edit(id, title) {
  await fetch(`/${id}`, 
    { method: 'PUT', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title})})
}


async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}