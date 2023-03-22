// javascript

class Person {
    constructor(data) {
        Object.assign(this, data)
    }
    renderHtml() {
        return `
        <div class="image">
        ${this.name}
        </div>`
    }
    
    flipIsLiked() {
        this.isLiked = !this.isLiked
    }
    
}
const array = [
    {
        name: "Ben",
        age: 27,
        isLiked: false,
        img: "img-1.jpg"
    },
    {
        name: "Nath",
        age: 30
    },
    {
        name: "Bruce",
        age: 51
    }
]
    
function returnImage() {
    
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => data.urls.full)
    
}

returnImage()
    

let count = 0
let name = new Person(array[count])
let likes = []

// function like() {
//     name.flipIsLiked()
//     count++
// }

function render() {
    document.getElementById("root").innerHTML = name.renderHtml()    
}




document.getElementById("swipe").addEventListener("click", function () {
//    name = new Person(array[count++])  
   console.log(likes)  
})

document.getElementById("like").addEventListener("click", function () {
    count++
    name = new Person(array[count])
    likes.push(name)
    document.getElementById("root").innerHTML = name.renderHtml()    
})

render()