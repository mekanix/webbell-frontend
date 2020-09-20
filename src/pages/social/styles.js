const flex = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default {
  cell: {
    fontSize: '20px',
  },

  progress: {
    ...flex,
  },

  paper: {
    padding: 20,
  },

  title: {
    margin: 0,
    padding: '30px',
  },

  field: {
    ...flex,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  cancel: {
    marginLeft: 10,
    marginRight: 10,
  },
}
