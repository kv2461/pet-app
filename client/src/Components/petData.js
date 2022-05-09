import demo from "../Images/demoPhoto.png";
import ivy from "../Images/ivyPhoto.png";
import suki from "../Images/sukiPhoto.png";

export default {
    "success" : true,
    "data": {
        "cats":[
            {
            "id":"01001",
            "petName":"Ivy",
            "petPhoto":ivy,
            "petAge":"Adult",
            "petBreed":["Tortoiseshell"],
            "petType":"cat"
            },
            {
                "id":"01002",
                "petName":"Demo",
                "petPhoto":demo,
                "petAge":"Adult",
                "petBreed":['Tabby','Siamese'],
                "petType":"cat"
            },
        ],
        "dogs":[
            {
                "id":'02001',
                'petName':'Suki',
                "petPhoto":suki,
                'petAge':'Adult',
                'petBreed':['Maltese','Poodle'],
                'petType':'dog'
            }
        ]
    }
}