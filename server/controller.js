const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];


module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
     deleteButton: (req, res) => {
        let { i } = req.param
        displayText.splice(i, 1)
        res.status(200).send(displayText)
//make a delete button that deletes 3 items from tge top if the list
     },
     postImg: (req, res) => {

     },
     edit: (req, res) => {

     }

}
