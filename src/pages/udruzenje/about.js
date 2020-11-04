import React from 'react'
import {
  Card,
  Avatar,
  CardActionArea,
  CardContent,
  Typography,
  TextField,
} from '@material-ui/core'
import {
  Facebook,
  Twitter,
  Email,
} from '@material-ui/icons'

import Template from 'templates/default/detail'

import background from './img/background.jpg'
import andjela from './img/andjela-gavrilovic.jpg'
import bojan from './img/bojan-dereta.jpg'
import dragan from './img/dragan-delic.jpg'
import emina from './img/emina-milosevic.jpg'
import milan from './img/milan-djukic.jpg'
import milan2 from './img/milan-dobric.png'
import milos from './img/milos-bojovic.jpg'
import slobodan from './img/slobodan-savic.jpg'
import uros from './img/uros-lazarevic.jpg'
import vuk from './img/vuk-vucic.jpg'


class About extends React.Component {
  render() {
    return (
      <Template style={{}}>
          <div style={{ minHeight: 200, backgroundImage: `url("${background}"`, backgroundSize: "100% 100%", alignItems: "center", justifyContent: "center", padding: 20, display: "flex", backgroundRepeat: "repeat" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} />
            <label />
          </div>
          <div style={{ backgroundColor: "#93c47d", minHeight: 30, fontSize: 23, padding: 40, color: "#2c2c2c" }}>
            Udruženje građana  “Ujedinjeni protiv kovida”
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: 50 }}>
            <a href="#oudruzenju" style={{ paddingBottom: 10 }}>
              O udruženju
            </a>
            <a style={{ paddingBottom: 10 }} href="#ciljevi">
              Ciljevi UPK
            </a>
            <a style={{ paddingBottom: 10 }} href="#clanovi">
              Članovi
            </a>
            <a style={{ paddingBottom: 10 }} href="#izvrsniodbor">
              Izvršni odbor
            </a>
            <a style={{ paddingBottom: 10 }} href="/">
              Savet udruženja
            </a>
            <a style={{ paddingBottom: 10 }} href="/">
              Kako se pridružiti
            </a>
            <a style={{ paddingBottom: 10 }} href="/">
              Podržite rad udruženja
            </a>
            <a href="/">
              Uslovi korišćenja
            </a>
          </div>
          <div style={{ padding: 40, paddingTop: 1 }}>
            <div style={{ height: 50 }} id="oudruzenju" />
            <h3 style={{  }}>
              O udruženju
            </h3>
            <p style={{ padding: 20, paddingBottom: 1 }}>
              Nakon inicijative ‘’Ujedinjeni protiv kovida’’ iz jula meseca kada je otvoreno pismo potpisalo najpre 350 lekara, a u danima koji su usledili broj potpisnika  se povećao na skoro 3000, u razgovorima među nekoliko hiljada lekara pojavila se jasna želja za formalizacijom inicijative kroz formiranje udruženja koje bi moglo da predstavlja kanal komunikacije za mnoge u struci, među sobom ali i prema javnosti, koji žele nešto, ali i imaju šta da kažu u vezi sa situacijom koja nas je kao državu i društvo pogodila pojavom pandemije Kovid 19, koja je trenutno u fokusu. Kroz brojne diskusije, i veliki broj zapažanja i predloga od strane lekara potpisnika došlo se do jasnog stava da u budućnosti jedan od osnovnih ciljeva udruženja treba da bude i reorganizacija, modernizacija, i konsolidacija zdravstvenog sistema, od koje bi koristi imali pre svega građani kroz poboljšanje kvaliteta zdravstvenih usluga ali i lekari kroz poboljšanje uslova rada i podizanje standarda.
            </p>
            <div style={{ height: 50 }} id="ciljevi" />
            <h3 style={{  }}>
              Ciljevi UPK
            </h3>
            <p style={{ padding: 20, paddingBottom: 1 }}>
              ‘’Ujedinjeni protiv kovida’’ će biti pre svega strukovno udruženje, koje će kroz angažovanje samih lekara koji su deo sistema pokušati da taj sistem načini boljim. Neki od ciljeva su rad na edukaciji i zdravstvenoj prosvećenosti stanovništva u cilju prevencije, racionalna organizacija primarnog, sekundarnog i tercijarnog nivoa zdravstvene zaštite, izrada strategije lečenja ‘’non-covid’’ pacijenata, depolitizacija i utvrđivanje načina izbora rukovodećeg kadra uz veće učešće zaposlenih, zaštita zdravstvenih radnika od političkog progona i mobinga, slobodno istupanje zaposlenih u javnosti i poništavanje uredbi o zabrani istih, funkcionalan sistem ocenjivanja uspešnosti i zadovoljstva zaposlenih rukovodećim kadrom-menadžmentom, stručno usavršavanje itd. Konstruktivni i korektivni predlozi biće usmereni i prema Ministarstvu zdravlja i državnoj upravi, Lekarskoj komori Srbije, Zajednici medicinskih fakulteta, Srpskoj akademiji nauka i umetnosti i svim ostalim relevantnim institucijama u cilju popravljanja uređenosti i funkcionalanosti zdravstvenog sistema. Uz jasan otklon od nepotizma, partijiske pripadnosti, ljudi na rukovodećim pozicijama sa materijalnim pretenzijama, osoba sklonih korupciji, i svega onoga što naše zdravstvo decenijama unazad opterećuje pokušaćemo da izgradimo sistem u kome lekari, medicinske sestre i tehničari i sav ostali kadar mogu da rade ponosno, slobodno i posvećeno, i da za to budu adekvatno plaćeni.
            </p>
            <div style={{ height: 50 }} id="clanovi" />
            <h3>
              Članovi UPK
            </h3>
            <p style={{ paddingLeft: 20, paddingTop: 20 }}>
              Obzirom na trenutni fokus vezan za pandemiju Kovid 19 i epidemiološku situaciju u zemlji i svetu pri udruženju su već formirana tela sačinjena od ljudi sa stručnim integritetom, oslanjajući se na komunikaciju i solidarnost među kolegama, koja se bave konkretnim temama. O svakoj grupi posebno možete čitati ovde.
            </p>
            <p style={{ paddingLeft: 20 }}>
              <span>
                Organi udruženja su Skupština, Izvršni odbor, Savet i predsednik. Skupština udruženja je donela Statut koji možete pročitati
              </span>
              <a href="/">
                ovde.
              </a>
            </p>
            <p style={{ paddingLeft: 20 }}>
              Matični broj udruženja: 28307195
            </p>
            <p style={{ paddingLeft: 20 }}>
              PIB: 112116442
            </p>
            <p style={{ paddingLeft: 20 }}>
              Datum osnivanja: 17. 8. 2020.
            </p>
          </div>
          <div style={{ padding: 40, paddingTop: 1 }}>
            <div style={{ height: 50 }} id="izvrsniodbor" />
            <h3 style={{  }}>
              Izvršni odbor
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", columnGap: 50, rowGap: 50, padding: 20 }}>
              <Card>
                <Avatar src={slobodan} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      Prof. dr Slobodan Savić
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <Avatar src={dragan} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      Prof. dr Dragan Delić
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <Avatar src={milan2} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      Ass. dr Milan Dobrić
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <Avatar src={milos} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      dr Miloš Bojović
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <Avatar src={milan} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      Prof. dr Milan Djukić
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <Avatar src={vuk} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      dr Vuk Vučić, predsednik UPK
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <Avatar src={emina} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      Doc. dr Emina Milošević
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <Avatar src={andjela} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      dr Andjela Gavrilović
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <Avatar src={bojan} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      dr Bojan Dereta
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <Avatar src={uros} variant="rounded" style={{ height: 300, width: "100%" }} />
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">
                      dr Uroš Lazarević
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
          <div style={{ backgroundColor: "#a9a9a9", padding: 30, display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center", flexDirection: "column", fontSize: 23 }}>
            Kontaktirajte nas:
            <TextField label="Ime" style={{ marginTop: 10, width: 400, backgroundColor: "#93c47d" }} />
            <TextField label="Prezime" style={{ marginTop: 10, width: 400, backgroundColor: "#93c47d" }} />
            <TextField label="Vaša Poruka" style={{ marginTop: 10, width: 400, backgroundColor: "#93c47d" }} multiline="true" rows={4} />
            <p style={{  }}>
              <span>
                Podrži rad UPK uplatom na neki od
              </span>
              <a href="/">
                računa udruženja.
              </a>
            </p>
            <p>
              Ujedinjeni protiv kovida 2020
            </p>
            <div style={{ height: 100, width: 300 }}>
              <Facebook style={{ height: 50, width: 50, marginRight: 10 }} />
              <Twitter style={{ height: 50, width: 50, marginRight: 10 }} />
              <Email style={{ height: 50, width: 50 }} />
            </div>
          </div>
      </Template>
    )
  }
}


export default About
