import background from './img/background.webp'
import covid from './img/covid.svg'


export default {
  first: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 65px)',
    backgroundImage: `url("${background}")`,
    backgroundSize: '100% 100%',
    padding: 20,
    backgroundRepeat: 'repeat',

    title: {
      textAlign: 'center',
      fontSize: 50,
      color: '#fffcfcff',
      textShadow: '2px 2px #424347',
    },

    count: {
      textAlign: 'center',
      color: '#656565',
      fontSize: '20',
    },

    join: {
      marginTop: 10,
    },
  },

  second: {
    padding: 50,
    backgroundColor: 'white',
    color: '#2f3b21',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,

    image: {
      height: 200,
      backgroundImage: `url("${covid}")`,
      backgroundSize: '100% 100%',
      width: 300,
    },

    button: {
      color: 'white',
      width: 300,
      marginTop: 50,
    },
  },

  third: {
    display: 'flex',
    flexDirection: 'row',
    padding: 50,
    alignItems: 'stretch',

    card: {
      width: '100%',
      position: 'relative',
    },

    media: {
      height: 250,
    },

    typography: {
      fontSize: 16,
    },

    actions: {
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  },

  fourth: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: 50,
    paddingTop: 0,

    hidden: {
      color: 'rgba(0, 0, 0, 0)',
      height: 50,
    },

    title: {
      fontSize: 30,
      textAlign: 'center',
    },

    paragraph: {
      fontSize: 18,
    },

    list: {
      paddingRight: 50,
      marginBottom: 20,
      fontSize: 18,
    },
  },

  footer: {
    backgroundColor: '#424347',
    padding: 20,
    color: '#e8e7ea',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
}
