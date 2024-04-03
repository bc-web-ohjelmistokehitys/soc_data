const express = require('express');
const path = require('path');

const {port, host} = require('./config.json');

// Luetaan data
const palomuuri_data = require('../palomuuri_mock.json');
const palvelin_data = require('../palvelin_mock.json');
const reititin_data = require('../reititin_mock.json');
const tyoasema_data = require('../tyoasema_mock.json');

// Dynaamisten logien generointi
const dyndata = require('./dyndata');

const app = express();

app.get('/logs/palomuuri', (req, res) => {
    res.json(palomuuri_data);
});

app.get('/logs/palvelin', (req, res) => {
    res.json(palvelin_data);
});

app.get('/logs/reititin', (req, res) => {
    res.json(reititin_data);
});

app.get('/logs/tyoasema', (req, res) => {
    res.json(tyoasema_data);
});

app.get('/dynlogs/palomuuri', (req, res) => {
    palomuuri_data.push(dyndata.genPalomuuri());
    res.json(palomuuri_data);
});

app.get('/dynlogs/palvelin', (req, res) => {
    palomuuri_data.push(dyndata.genPalvelin());
    res.json(palvelin_data);
});

app.get('/dynlogs/reititin', (req, res) => {
    reititin_data.push(dyndata.genReititin());
    res.json(reititin_data);
})

app.get('/dynlogs/tyoasema', (req, res) => {
    tyoasema_data.push(dyndata.genTyoasema());
    res.json(tyoasema_data);
});

app.listen(port, host, () => {console.log(`SOC Mock Data Server is runnig on ${host} at port ${port}`)});
