const path = require('path')

module.exports = {

    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../../index.html'))
    },
    styles: (req, res) => {
        res.sendFile(path.join(__dirname, '../../styles.css'))
    },
    script: (req, res) => {
        res.sendFile(path.join(__dirname, '../../script.js'))
    },
    sig: (req, res) => {
        res.sendFile(path.join(__dirname, '../../357-sig.jpg'))
    },
    Ar: (req, res) => {
        res.sendFile(path.join(__dirname, '../../556.jpg'))
    },
    background: (req, res) => {
        res.sendFile(path.join(__dirname, '../../background.jpg'))
    } 


   

}