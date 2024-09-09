let items = ["1", "2", "3"]

const itemsDiv = document.getElementById("items")

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "20px"

        const text = document.createElement("p")
        text.textContent = item
        text.style.display = "inline"
        text.style.marginRight = "10px"

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

renderItems()

function addItem() {
}

function loadItem(){
}

function saveItem(){
}

function removeItem(){
}

