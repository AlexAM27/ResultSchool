document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id
    remove(id).then(() => {
      event.target.closest("li").remove()
    })
  }
  if (event.target.dataset.type === "edit") {
    const id = event.target.dataset.id

    const noteValue = document
      .querySelector(`[data-id='${id}']`)
      .childNodes[0].nodeValue.trim()

    const newNote = prompt("Enter new note", noteValue)

    if (newNote) {
      edit(id, newNote).then(() => {
        event.target.closest("li").childNodes[0].nodeValue = newNote
      })
    }
  }
})

async function edit(id, title) {
  await fetch(`/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  })
}

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" })
}
