// import express module    
const express = require("express");
// import bcrypt module    
const bcrypt = require("bcrypt");
// import axios module    
const axios = require("axios");
// import path module    
const path = require('path');
// import multer module    
const multer = require('multer');
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require('mongoose');
// import mongoose unique validator module
const uniqueValidator = require('mongoose-unique-validator');
//connect APP with DB server
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
const ObjectId = require("mongoose");
//create express application
const app = express();
// Configure Body-parser
// Send JSON responses
app.use(bodyParser.json());
// Get objects from Request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, OPTIONS, PATCH, PUT"

    );

    next();

});
//upload file config
app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
//Models Importation
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");
const Stadium = require("./models/stadium");
const Reclamation = require("./models/reclamation");
const Comment = require("./models/comment");
const { log } = require("console");
//Function to generate ID
function generateId(T) {
    let max;
    if (T.length == 0) {
        max = 0;
    }
    else {
        max = T[0].id;
        for (let i = 1; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }
        }
    }

    return max + 1;

}
function checkEmail(email, users) {
    let exist = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            exist = true;
            break;
        }
    }
    return exist;
}
//Busniss Logic : Get All Matches
app.get("/matches", (req, res) => {
    console.log("here into BL: get all matches");
    Match.find().then((docs) => {
        console.log("Here docs", docs);
        res.json({ matchesArray: docs, message: "Done" });
    });
});
//Busniss Logic : Get All Teams
app.get("/teams", (req, res) => {
    console.log("here into BL: get all teams");
    Team.find().then((docs) => {
        console.log("here docs", docs);
        res.json({ teamsArray: docs, message: "Done" });
    });
});
//Busniss Logic : Get All players
app.get("/players", (req, res) => {
    console.log("here into BL: get all players");
    Player.find().then((docs) => {
        console.log("here docs", docs);
        res.json({ playersArray: docs, message: "done" });
    });
});
//Busniss Logic : Get All stadiums
app.get("/stadiums", (req, res) => {
    console.log("here into BL: get all stadiums");
    Stadium.find().then((docs) => {
        console.log("here docs", docs);
        res.json({ stadiumsArray: docs, message: "done" });
    });
});
//Add Team
app.post("/teams", (req, res) => {
    let team = new Team(req.body);
    team.save();
    res.json({ message: "Added With Success" })
})
//Add Stadium
app.post("/stadiums", (req, res) => {
    let Stadium = new Stadium(req.body);
    stadium.save();
    res.json({ message: "Added With Success" })
});
//Add Match
app.post("/matches", (req, res) => {
    //get object from request
    let match = new Match(req.body);
    match.save();
    res.json({ messa: "Added With success" })
})
//Add Players
app.post("/players", (req, res) => {
    console.log("here into BL: player added successfully")
    let player = new Player(req.body);
    player.save();
    res.json({ message: "Added with success" });
})
//Delete Match
app.delete("/matches/:y", (req, res) => {
    let id = req.params.y;
    Match.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });

        }
    });
});
//Delete Team
app.delete("/teams/:y", (req, res) => {
    let id = req.params.y;
    Match.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });

        }
    });
})
//Delete Players
app.delete("/players/:y", (req, res) => {
    Player.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });

        }
    });
})
//Delete Stadium
app.delete("/stadiums/:y", (req, res) => {
    Stadium.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });

        }
    });
})
//Edit Match
app.put("/matches", (req, res) => {
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true })
        } else {
            res.json({ isUpdated: false })
        }
    });
})
//Edit Team
app.put("/teams", (req, res) => {
    let newTeam = req.body
    Team.updateOne({ _id: newMatch._id }, newMatch).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true })
        } else {
            res.json({ isUpdated: false })
        }
    });
})
//Edit Player
app.put("/players", (req, res) => {
    let newPlayer = req.body
    Player.updateOne({ _id: newMatch._id }, newMatch).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true })
        } else {
            res.json({ isUpdated: false })
        }
    });
})
//Edit Stadium
app.put("/stadiums", (req, res) => {
    let newStadium = req.body
    Stadium.updateOne({ _id: newMatch._id }, newMatch).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true })
        } else {
            res.json({ isUpdated: false })
        }
    });
})
//Get Match By Id
app.get("/matches/:y", (req, res) => {
    //let id = activatedRoute.snapshot().paramMap().get("x")
    let id = req.params.y;
    console.log("id", id);
    Match.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        res.json({ match: doc });
    });
});
//Get Team By Id
app.get("/teams/:y", (req, res) => {
    let id = req.params.y;
    console.log("id", id);
    Team.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        res.json({ team: doc });
    });
})
//Get Player By Id
app.get("/players/:y", (req, res) => {
    let id = req.params.y;
    console.log("id", id);
    Player.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        res.json({ player: doc });
    });
})
//Get Stadium By Id
app.get("/stadiums/:y", (req, res) => {
    let id = req.params.y;
    console.log("id", id);
    Stadium.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        res.json({ player: doc });
    });
})
//Search Matches By Scores 
app.post("/matches/search", (req, res) => {
    console.log("Here into BL: Search Matches", req.body);
    let search = req.body;
    let findedMatches = matches.filter((obj) => {
        return obj.scoreOne == search.scoreOne || obj.scoreTwo == search.scoreTwo
    });
    res.json({ searchTab: findedMatches });
});
//Business Logic: Signup
app.post("/users/signup",
    multer({ storage: storage }).single("img"),
    (req, res) => {
        console.log("Here into BL: Signup", req.body);
        bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
            console.log("crypted pwd", cryptedPwd);
            let url = req.protocol + "://" + req.get("host")
            let imgPath = req.file
              ? url +  "/images/" + req.file.filename
              : url + "/images/avatar.png";
             // if (req.file) {
             //   imgPath = req.file.filename;
             // } else {
             //   imgPath = null
             // }
            let user = new User({
                fName: req.body.firstName,
                lName: req.body.lastName,
                email: req.body.email,
                password: cryptedPwd,
                tel: req.body.tel,
                role: req.body.role,
                img: imgPath,
            });
            user.save((err, doc) => {
                console.log("Here error", err);
                console.log("Here doc", doc);
                if (err) {
                    res.json({ message: "Email exists" });

                } else {
                    res.json({ message: "Added with success" });
                }
            });
        });
    });
//Business Logic: Login
app.post("/users/login", (req, res) => {
    let user = req.body;
    let userToSend;
    User.findOne({ email: user.email }).then((response) => {
        if (!response) {
            res.json({ message: "0" });
        }
        userToSend = response;
        return bcrypt.compare(user.password, response.password);
    })
        .then((pwdResponse) => {
            if (!pwdResponse) {
                res.json({ message: "1" });
            } else {
                //object {fName, lName, id, role}
                let userObj = {
                    id: userToSend._id,
                    fName: userToSend.fName,
                    lName: userToSend.lName,
                    role: userToSend.role
                };
                res.json({ message: "2", user: userObj });
            }
        });
});
//Get User By Id
app.get("/users/:y", (req, res) => {
    let id = req.params.y;
    User.findOne({ _id: req.params.y }).then((doc) => {
        console.log("here doc", doc);
        res.json({ user: doc });
    });
});
// search weather
app.post("/weathers", (req,res) => {
    const city = req.body.city;
 const Key = "62ee756a34835483299877a61961cafb";
 const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid${Key}&unit=metric` ;
 axios.get(apiUrl).then((response) => {
    let weatherRes = {
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    };
    res.json({ weather: weatherRes});
 })
})
//BL : ADD Reclamation
app.post("/reclamations", (req,res) => {
    let reclamation = new Reclamation(req.body);
    reclamation.save((err, doc) => {
        if (err) {
            res.json({isAdded:false})
        } else {
            res.json({isAdded:true})
        }
    })
})
//BL : Get All user Reclamations
app.get("/reclamations/:id", (rq, res) => {
    Reclamation.find({ userId: req.params.id})
})
//BL : ADD Comment
app.post("/matches/comment", (req, res) => {
    console.log("here comment", req.body);
    let comment = new Comment({
        content: req.body.content,
        userId: ObjectId(req.body.userId),
        matchId: ObjectId(req.body.matchId),
    });
    comment.save((err, doc) => {
        if (err) {
            res.json({isAdded: false})
        } else {
            res.json({isAdded: true})
        }
    });
})
// get all matches with comments
app.get("/matches/comments/getAll", (req, res) => {
    console.log("here to get all matches with comments");
    Match.aggregate(
        [
        {
        $lookup: {
        from: "comments", // collection to join
        localField: "_id", //field from the input documents
        foreignField: "matchId", //field from the documents of the "from" collection
        as: "comments", // output array field
        },
        },
        ],
        (error, docs) => {
            res.json({matches: docs});
            }
        )
})

//make app importable
module.exports = app;
