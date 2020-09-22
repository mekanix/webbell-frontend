import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { withStore } from 'freenit'
import { errors } from 'utils'
import Template from 'templates/default/detail'

import styles from './styles'


class SocialsList extends React.Component {
  state = {
    add: false,
    fetching: true,
    name: '',
    specialty: '',
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { social, notification } = this.props.store
    const response = await social.fetchAll()
    this.setState({ fetching: false })
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    }
  }

  openAdd = () => {
    this.setState({
      add: true,
      name: '',
      specialty: '',
    })
  }

  closeAdd = () => {
    this.setState({
      add: false,
      name: '',
      specialty: '',
    })
  }

  changeValue = (field) => (event) => {
    this.setState({ [field]: event.target.value })
  }

  generateRow = (sig, index) => {
    const row = this.props.store.auth.detail.ok
      ? (
        <TableRow key={sig.id}>
          <TableCell>
            <Link to={`/social/${sig.id}`}>
              {index + 1}
            </Link>
          </TableCell>
          <TableCell>
            <Link to={`/social/${sig.id}`}>
              {sig.name}
            </Link>
          </TableCell>
          <TableCell>
            <Link to={`/social/${sig.id}`}>
              {sig.specialty}
            </Link>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow key={sig.id}>
          <TableCell>
            {index + 1}
          </TableCell>
          <TableCell>
            {sig.name}
          </TableCell>
          <TableCell>
            {sig.specialty}
          </TableCell>
        </TableRow>
      )
    return row
  }

  addSocial = async () => {
    const { history, notification, social } = this.props.store
    const response = await social.create(this.state.name, this.state.specialty)
    this.closeAdd()
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    } else {
      history.push(`/social/${response.id}`)
    }
  }

  render() {
    const table = this.state.fetching
      ? (
        <div style={styles.progress}>
          <CircularProgress />
        </div>
      )
      : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={styles.cell}>
                  No.
                </TableCell>
                <TableCell style={styles.cell}>
                  Name
                </TableCell>
                <TableCell style={styles.cell}>
                  Specialty
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.store.social.list.data.map(
                (sig, index) => this.generateRow(sig, index)
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )
    const addButton = this.props.store.auth.detail.ok
      ? (
        <Fab
          color="primary"
          onClick={this.openAdd}
          style={{ position: 'absolute', right: 20 }}
        >
          <AddIcon />
        </Fab>
      ) : null
    return (
      <Template style={{}}>
        <Paper style={styles.paper}>
          {addButton}
          <Dialog open={this.state.add} onClose={this.closeAdd}>
            <DialogTitle>Add Social Worker</DialogTitle>
            <DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                autoFocus
                label="name"
                value={this.state.name}
                onChange={this.changeValue('name')}
              />
              <TextField
                label="specialty"
                value={this.state.specialty}
                onChange={this.changeValue('specialty')}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeAdd} color="secondary">Cance</Button>
              <Button onClick={this.addSocial} color="primary">Add</Button>
            </DialogActions>
          </Dialog>
          <h2 style={styles.title}>
            Proglas su potpisali:
          </h2>
          {table}
        </Paper>
      </Template>
    )
  }
}


export default withStore(SocialsList)
