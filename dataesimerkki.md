Esimerkkejä lokitiedoista, joita SOC-dashboardissa halutaan näyttää:

1. **Palvelinlokit:**
   - Käyttäjän kirjautuminen:
     - Käyttäjä "user123" kirjautui palvelimelle "server1" onnistuneesti klo 10:00.
     - Käyttäjä "admin" kirjautui palvelimelle "server2" epäonnistuneesti klo 10:15.
   - Ohjelmistopäivitykset:
     - Palvelimella "server1" asennettiin päivitys "SecurityPatch20240318" klo 11:30.
     - Palvelimella "server3" päivitys "AppUpdate_v2.5" asennettiin onnistuneesti klo 12:00.
   - Virustentarkastukset:
     - Palvelimella "server2" suoritettiin virustentarkistus koko järjestelmälle klo 14:00.
   - Poikkeavat toiminnot:
     - Epätavallisen suuri määrä epäonnistuneita kirjautumisyrityksiä havaittiin palvelimella "server1" klo 15:00.

2. **Palomuurin lokit:**
   - Estetyt yhteydenotot:
     - Palomuuri esti yhteydenoton IP-osoitteesta "192.168.1.100" porttiin 22 (SSH) klo 10:30.
   - Hyökkäysten havainnointi:
     - Palomuuri havaittiin suuren määrän ICMP-paketteja (ping flood) IP-osoitteesta "10.10.10.5" klo 13:45.

3. **Reitittimen lokit:**
   - Liikenteen ohjaukset:
     - Reititin ohjasi liikennettä palvelimelta "server1" verkko-osoitteeseen "192.168.2.50" klo 11:00.
   - Verkon virheilmoitukset:
     - Reititin ilmoitti verkkoyhteyden katkeamisesta palvelimen "server3" ja verkkoon "10.20.30.0" klo 12:30.


**Huom: nämä esimerkit eivät vastaa suoraan json tiedostojen mock-dataa.**