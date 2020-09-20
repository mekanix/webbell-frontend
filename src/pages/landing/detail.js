import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { withStore } from 'freenit'
import { errors } from 'utils'
import Template from 'templates/default/detail'

import styles from './styles'
import medics from './img/medics.jpeg'
import art from './img/art.jpeg'
import layers from './img/layers.jpeg'


class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { medic, notification } = this.props.store
    const response = await medic.getCount()
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    }
  }

  render() {
    const cardStyle = {
      ...styles.third.card,
      marginLeft: 10,
      marginRight: 10,
      minHeight: 450,
    }

    return (
      <Template style={{}}>
        <div style={styles.first}>
          <div>
            <p style={styles.first.title}>
              UJEDINJENI PROTIV KOVIDA
            </p>
            <p style={styles.first.count}>
              {this.props.store.medic.list.total} potpisa
            </p>
          </div>
          <a href="#otvorenopismo">
            <Button
              color="secondary"
              variant="contained"
              style={styles.first.join}
            >
              pridruži nam se
            </Button>
          </a>
        </div>
        <div style={styles.second}>
          <div style={styles.second.image} />
          <p>
            Kao lekari koji su položili zakletvu u kojoj, između ostalog
            piše, ‘’održavaću svim silama čast i plemenite tradicije
            lekarskog zvanja’’, smatramo da nam je moralna i profesionalna
            obaveza da ukažemo na ozbiljnost situacije u kojoj se nalazimo.
            Naša ljudska i profesionalna reakcija na stvarnost sa kojom se
            medicinski radnici svakodnevno susreću u svom radu, dovela je do
            ove inicijative.
          </p>
          <p>
            Tehnički organizatori su prvi potpisnici proglasa. Ne postoje
            formalni organizatori mimo potpisnika proglasa i on pripada svima
            nama.
          </p>
          <p>
            Pozivamo sve medicinske stručnjake da u skladu sa epidemiološkom
            situacijom proglas potpišu elektronski. Potpisivanje se vrši
            ispisivanjem rukom na papiru teksta "Ujedinjeni protiv kovida,
            potpis". Po želji, sloganu i potpisu može prethoditi neki tekst
            po ličnom izboru. Papir se slika i šalje emailom na adresu
            &nbsp;
            <a href="mailto:ujedinjeni.protiv.kovida@gmail.com">
              ujedinjeni.protiv.kovida@gmail.com
            </a>
            &nbsp;
            kao attachment, a u telu poruke pišete svoje ime i prezime i
            titulu sa kojom želite da budete navedeni.
          </p>
          <a href="#otvorenopismo">
            <Button
              variant="contained"
              color="primary"
              style={styles.second.button}
            >
              Otvoreno pismo Vladi
            </Button>
          </a>
        </div>
        <div style={styles.third}>
          <Card style={styles.third.card}>
            <CardActionArea>
              <CardMedia image={medics} style={styles.third.media} />
              <CardContent>
                <Typography variant="h5" component="h2">
                  DOKTORI PROTIV KOVIDA
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  style={styles.third.typography}
                >
                  Pogledajte spisak Doktora koji su potpisali proglas.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={styles.third.actions}>
              <Link to="/medics">
                <Button>
                  saznaj više
                </Button>
              </Link>
            </CardActions>
          </Card>
          <Card style={cardStyle}>
            <CardActionArea>
              <CardMedia style={styles.third.media} image={art} />
              <CardContent>
                <Typography variant="h5" component="h2">
                  UMETNICI PROTIV KOVIDA
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  style={styles.third.typography}
                >
                  Pogledajte spisak umetnika koji su potpisali proglas.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={styles.third.actions}>
              <Button>
                saznaj više
              </Button>
            </CardActions>
          </Card>
          <Card style={cardStyle}>
            <CardActionArea>
              <CardMedia style={styles.third.media} image={art} />
              <CardContent>
                <Typography variant="h5" component="h2">
                  SOCIAJLNI RADNICI PROTIV KOVIDA
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  style={styles.third.typography}
                >
                  Pogledajte spisak socijalnih radnika koji su potpisali proglas.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={styles.third.actions}>
              <Button>
                saznaj više
              </Button>
            </CardActions>
          </Card>
          <Card style={styles.third.card}>
            <CardActionArea>
              <CardMedia image={layers} style={styles.third.media} />
              <CardContent>
                <Typography variant="h5" component="h2">
                  ADVOKATI PROTIV KOVIDA
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  style={styles.third.typography}
                >
                  Pogledajte spisak advokata koji su potpisali proglas.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={styles.third.actions}>
              <Button>
                saznaj više
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={styles.fourth}>
          <p style={styles.fourth.title} id="otvorenopismo">
            Otvoreno pismo Vladi RS i ostalim nadležnim institucijama
          </p>
          <p style={styles.fourth.paragraph}>
            Mi, dole potpisani, odlučujemo se na javno istupanje jer ne vidimo
            drugo rešenje za javno-zdravstvenu katastrofu u kojoj se naša
            država nalazi. Ne samo Hipokratova zakletva, već i opšta etika
            nalaže da ukažemo na probleme koji su zdravstvene radnike doveli u
            ovu situaciju i otežavaju im dalji rad. U interesu je javnosti da
            se ovi problemi istraže, odgovorni pojedinci i institucije
            procesuiraju i naprave koraci ka zdravstvenom sistemu bez straha i
            prevage politike nad stručnošću.
          </p>
          <p style={styles.fourth.paragraph}>
            Potpuno popuštanje protivepidemijskih mera u predizbornom periodu
            (mitinzi, utakmice, turniri, proslave i sl.) je dovelo do gubitka
            kontrole nad epidemiološkom situacijom i to se nikako ne može
            opravdati stručnim motivima. Konfuzija povodom broja obolelih i
            preminulih je izazvana neslaganjem sa statističkim i epidemiološkim
            očekivanjima, saznanjima iz svakodnevnog rada, te kontradiktornim
            izjavama u javnosti.  Sve to je ozbiljno uzdrmalo zdravstveni
            sistem i narušilo poverenje i građana i lekara u isti. Sa tim u
            vezi želimo da se oštro ogradimo od republičkog Kriznog štaba za
            borbu protiv kovida 19.
          </p>
          <ul>
            <li style={styles.fourth.paragraph}>
              Tražimo da se javnosti objasni nadležnost nad bazom iza COVID
              portala, a zatim organizuje postupak pouzdanog utvrđivanja broja
              zaraženih, obolelih i umrlih od kovida-19, kako u opštoj
              populaciji, tako i među zdravstvenim radnicima. Ako se utvrdi da
              su podaci bili namerno zataškavani, za odgovorne koji su u tome
              svesno i namerno učestvovali treba tražiti profesionalnu, a i
              svaku drugu odgovornost.
            </li>
            <li style={styles.fourth.paragraph}>
              Tražimo da odgovornost za nastalu štetu preuzme Krizni štab u
              celini i da se formira novi Krizni štab koji bi činili eksperti
              sa dokazanim stručnim i moralnim kvalitetima. Javnosti i novim
              članovima bi pod hitno trebalo razjasniti uzroke neuspeha
              trenutnog Kriznog štaba.
            </li>
            <li style={styles.fourth.paragraph}>
              Tražimo da se stane na put zastrašivanju i politizaciji koji i
              inače, a naročito u epidemiji, ometaju dobru praksu i narušavaju
              lično dostojanstvo zdravstvenih radnika.
            </li>
          </ul>
          <p style={styles.fourth.paragraph}>
            Pozivamo vlasti da brzo reaguju u skladu sa teškom trenutnom
            situacijom. Pozivamo građane da poštuju epidemiološke preporuke
            uprkos njihovom kasnom dolasku. Pozivamo kolege da stanu uz nas,
            jer jedini način da pobedimo strah koji vlada u zdravstvu je da svi
            stanemo zajedno.
          </p>
        </div>
        <div style={styles.footer}>
          2020 UJEDINJENI PROTIV KOVIDA
        </div>
      </Template>
    )
  }
}


export default withStore(Landing)
