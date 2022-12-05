
const complimentBtn = document.getElementById("complimentButton")
const displayText = document.getElementById('randomFortune')
const deletebtn = document.getElementById("deletebtn")
const formTxt = document.getElementById('text')
const post = document.getElementById('postBtn')
const img = document.getElementById('imagePost')
const submitBtn = document.getElementById('submit')
const number = document.getElementById('number')
const text = document.getElementById('text')
const editForm = document.getElementById('editForm')

const getCompliment = () => {
    displayText.innerHTML = ''
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
            let fortuneText = document.createElement('h3')
            fortuneText.textContent = `${data}`
            displayText.appendChild(fortuneText)
    });
};

const deleteButton = () => {
    displayText.innerHTML = ''
    axios.delete(`http://localhost:4000/api/compliment/${deletebtn.id}`)
    .then(res => { 
        const data = res.data;
            let newfortuneText = document.createElement('h3')
            newfortuneText.textContent = `${data}`
            displayText.appendChild(newfortuneText)
    })
    .catch(err => console.log(err))
}

const postButton = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:4000/api/compliment/`)
    .then(res => {
        const data = res.data
        let userData = document.createElement('span')
        let imgURL = document.createElement('img')
        userData.textContent = data
        imgURL.src = formTxt.value
        img.appendChild(userData)
        img.appendChild(imgURL)
        formTxt.value = ''
    })
    .catch(err => console.log(err))
}

const edit = (evt) => {
    displayText.innerHTML = ''
    evt.preventDefault()
    let input = {
        number: editForm.number.value,
        text: editForm.text.value
    }
   
    axios.put(`http://localhost:4000/api/compliment/`, input)
    .then(res => {
        const data = res.data;
        let editedfortuneText = document.createElement('h3')
        editedfortuneText.textContent = `${data}`
        displayText.appendChild(editedfortuneText)
    })
    .catch(err => console.log(err))
}

complimentBtn.addEventListener('click', getCompliment)
deletebtn.addEventListener('click', deleteButton)
post.addEventListener('click', postButton)
editForm.addEventListener('submit', edit)
