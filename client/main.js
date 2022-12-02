const complimentBtn = document.getElementById("complimentButton")
const displayText = document.getElementById('randomFortune')
const deletebtn = document.getElementById("deletebtn")
const formTxt = document.getElementById('text')
const post = document.getElementById('postBtn')

const getCompliment = () => {
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
        const data = res.data
        displayText(data)
        deletebtn.id = 1
        i = deletebtn.id
        
    })
    .catch(err => console.log(err))
}

const postButton = () => {
    evt.preventDefault()
    axios.post(`http://localhost:4000/api/compliment`)
    .then(res => {
        const data = res.data
        formTxt.textContent = input.value
        post.appendChild(formTxt)
        let img = document.createElement('img')
        img.src = formTxt
        displayText.appendChild(img)
        
    })
    .catch(err => console.log(err))
}

const edit = () => {
    
}

complimentBtn.addEventListener('click', getCompliment)
deletebtn.addEventListener('click', deleteButton)
post.addEventListener('click', postButton)
