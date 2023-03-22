// javascript

class Person {
    constructor(data) {
        Object.assign(this, data)
    }
    renderImage() {
        return `url(./${this.img})`
    }
    renderHtml() {
        return `
            <div class="profile-text">
                <h2>${this.name} ${this.age}</h2>
            </div>`
    }


    
    flipIsLiked() {
        this.isLiked = !this.isLiked
    }
    
}
const array = [
    {
        name: "One",
        age: 27,
        isLiked: false,
        img: "img1.jpg"
    },
    {
        name: "Two",
        age: 20,
        isLiked: false,
        img: "img2.jpg"
    },
    {
        name: "Three",
        age: 24,
        isLiked: false,
        img: "img3.jpg"
    }
]
    

let count = 0
let personProfile = new Person(array[count])
let likes = []

// function like() {
//     name.flipIsLiked()
//     count++
// }

function render() {
    // document.getElementById("root").innerHTML = name.renderHtml()  
    document.getElementById("root").style.backgroundImage = personProfile.renderImage()  
    document.getElementById("root").innerHTML = personProfile.renderHtml() 
    console.log(personProfile.renderHtml())
}




document.getElementById("swipe").addEventListener("click", function () {
    count++
    personProfile = new Person(array[count])
    document.getElementById("root").style.backgroundImage = personProfile.renderImage() 
})

document.getElementById("like").addEventListener("click", function () {
    count++
    personProfile = new Person(array[count])
    likes.push(personProfile)
    // document.getElementById("root").innerHTML = name.renderHtml() 
    document.getElementById("root").style.backgroundImage = personProfile.renderImage() 
    document.getElementById("root").innerHTML = personProfile.renderHtml() 
})

render()