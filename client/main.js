const complimentBtn = document.getElementById("complimentButton")
const displayText = document.getElementById('randomFortune')
const deletebtn = document.getElementById("deletebtn")
const formTxt = document.getElementById('text')
const post = document.getElementById('postBtn')
const img = document.getElementById('imagePost')

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
    axios.delete(`http://localhost:4000/api/compliment/${deletebtn.id}`)
    .then(res => {
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

const edit = () => {
    
}

complimentBtn.addEventListener('click', getCompliment)
deletebtn.addEventListener('click', deleteButton)
post.addEventListener('click', postButton)
