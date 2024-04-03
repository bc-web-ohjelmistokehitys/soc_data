# Mock Server

Tämä hakemisto sisältää Node.js / Express.js -palvelinohjelmiston, joka jakaa
SOC Dashboard -projektin käyttöön mock-dataa.

## Asentaminen

1) Varmista että koneellasi on Node.js
2) Aja komento `npm install` tässä hakemistossa.

## Käynnistäminen

Käynnistä palvelin tässä hakemistossa komennolla `node index.js`

## Polut

Dataa jaetaan kahdenalisissa poluissa `/logs/` ja `/dynlogs/`. Jälkimmäiset generoivat joka pyynnöllä lisää dataa.
