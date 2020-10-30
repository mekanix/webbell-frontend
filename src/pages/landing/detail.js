import React from 'react'
import {
  Button,
  TextField,
} from '@material-ui/core'
import {
  Facebook,
  Twitter,
  Email,
} from '@material-ui/icons'
import Template from 'templates/default/detail'

import background from './img/background.jpg'


class Landing extends React.Component {
  render() {
    return (
      <Template style={{}}>
        <div style={{ minHeight: "calc(100vh - 65px)", backgroundImage: `url(${background})`, backgroundSize: "100% 100%", alignItems: "center", justifyContent: "center", padding: 20, display: "flex", backgroundRepeat: "repeat" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} />
          <label />
        </div>
        <div style={{ padding: 5, backgroundColor: "#93c47d" }}>
          <div style={{ padding: 50, backgroundColor: "#93c47d", color: "#2f3b21", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ textAlign: "center", fontSize: 40 }}>
              Dobrodošli na stranicu udruženja građana
            </p>
            <p style={{ textAlign: "center", fontSize: 50 }}>
              UJEDINJENI PROTIV KOVIDA
            </p>
            <p style={{ textAlign: "center", fontSize: 20, fontStyle: "italic" }}>
              “Čovek postaje slobodan svojom odlukom, otporom i nepristajanjem.” Meša Selimović
            </p>
            <Button variant="outlined" color="black" style={{ marginTop: 50, fontSize: 25 }}>
              Pridruži se
            </Button>
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


export default Landing
