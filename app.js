    /* Noor Homepage */
    const express = require("express")
    const helmet = require("helmet")
    const exphbs = require("express-handlebars")
    /* Port */
    const PORT = process.env.PORT || 3000
    const app = express()
    /* Handlebars setup */
    app.engine('.hbs', exphbs({
        defaultLayout: 'layout',
        extname: '.hbs',
        layoutsDir: __dirname + "/views/layouts/",
        partialsDir: __dirname + "/views/partials/"
    }));
    app.set('view engine', '.hbs');

    /* Customs */
    app.use(express.static(__dirname + "/public"))
    app.use(helmet())

    app.get("/", function (req, res) {
        res.render("index", {
           title: "Noor",
        })
    })

    app.get("/coming-soon",function(req,res){
        res.render("coming-soon",{
            title: "Coming Soon!"
        })
    })

    app.get("/blacky",function(req,res){
        res.render("blacky",{
            title:"Blacky"
        })
    })


    /* App listen */
    app.listen(PORT, () => {
        console.log("Listening on port",PORT,"...")
    })