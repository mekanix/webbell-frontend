const flex = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const styles = {
  cell: {
    fontSize: '20px',
  },

  progress: {
    ...flex,
  },

  paper: {
    ...flex,
    flexDirection: 'column',
    padding: 20,
  },

  title: {
    margin: 0,
    padding: '30px',
  },

  field: {
    ...flex,
  },

  cancel: {
    marginLeft: 10,
    marginRight: 10,
  },

  delete: {
    marginTop: 10,
  },
}


export default styles
