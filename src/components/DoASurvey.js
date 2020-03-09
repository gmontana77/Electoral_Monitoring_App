// src/components/DoASurvey.js

import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.react";
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";


const DoASurvey = () => {

    var surveyJSON = {
    
        "pages": [
            {
             "name": "page1",
             "elements": [
              {
               "type": "text",
               "name": "Nombre Completo",
               "title": "Nombre Completo"
              },
              {
               "type": "text",
               "name": "Identificador",
               "title": "Identificador",
               "inputType": "number"
              },
              {
               "type": "rating",
               "name": "Que puntuación das a la organización?",
               "title": "Que puntuación das a la organización?"
              }
             ]
            }
           ]
          }

            const { user } = useAuth0();
            localStorage.setItem('userEmail', user.email)

            const sendDataToServer = (survey) => {
            //send Ajax request to your web server.
            // JSON.stringify(survey.data));
            axios.post("http://localhost:5000/doasurvey", {
                data: survey.data,
                email: user.email
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        }

  return (
    <div style={{ marginLeft: '2em', width: '50%'}}>
                <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />
     </div>
  );
};

export default DoASurvey;


