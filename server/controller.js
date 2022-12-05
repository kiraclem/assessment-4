const compliments = ["Gee, you're a smart cookie! " , "Cool shirt! " , "Your Javascript skills are stellar. " , "You are amazing! " , "Don't ever give up! "];
const complimentList = []
let user = 'user123'
let numofPosts = 1

module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        complimentList.push(randomCompliment)
        res.status(200).send(complimentList);
    },
     deleteButton: (req, res) => {
        complimentList.splice(0, 1)
        res.status(200).send(complimentList)
     
     },
     postImg: (req, res) => {
        if (numofPosts === 1) {
            res.status(200).send(`posted by ${user}: this user has posted ${numofPosts} time`)
        } else if (numofPosts > 1) {
            res.status(200).send(`posted by ${user}: this user has posted ${numofPosts} times`)
        }
        numofPosts++
     },
     edit: (req, res) => {
        console.log(req.body)
      let { number, text } = req.body
      let num = Number(number)
      num--
      console.log(num)
      complimentList.splice(num,1,text)
      
      res.status(200).send(complimentList)

     }

}
