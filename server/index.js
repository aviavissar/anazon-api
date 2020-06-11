const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000;
const axios = require('axios');
const apikey="9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9"

/**  creating server because cross-domain problems from aws to local-host     ***/


app.use(express.json())
app.use(cors())
app.listen(port, () => {
    console.log('server is up in port ' + port)
})

/**  fetch data from Amazon to my server */

const awsToMe = async () => {

    try {
        const response = await axios({
            method: 'get',
            url: 'https://i3gy725noe.execute-api.us-east-1.amazonaws.com/default/VisualizatorApi',
            headers: {
                "x-api-key": apikey
            }
        });
               await createApi(response.data)

    } catch (error) {
        console.log(error);
    }
}

const createApi = async (data) => {
    app.get('/campaigns', async (req, res) => {
        try {
            await res.send(data);
            console.log(data);
        } catch (e) {
            res.status(400).send(e)
        }
    })

}


awsToMe();
