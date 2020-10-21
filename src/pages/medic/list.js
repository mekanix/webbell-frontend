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


class MedicsList extends React.Component {
  state = {
    add: false,
    fetching: true,
    academic: '',
    name: '',
    specialty: '',
    title: '',
    city: '',
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { medic, notification } = this.props.store
    const response = await medic.fetchAll()
    this.setState({ fetching: false })
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    }
  }

  openAdd = () => {
    this.setState({
      add: true,
      academic: '',
      name: '',
      specialty: '',
      title: '',
      city: '',
    })
  }

  closeAdd = () => {
    this.setState({
      add: false,
      academic: '',
      name: '',
      specialty: '',
      title: '',
      city: '',
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
            <Link to={`/medic/${sig.id}`}>
              {index + 1}
            </Link>
          </TableCell>
          <TableCell>
            <Link to={`/medic/${sig.id}`}>
              {sig.title}
            </Link>
          </TableCell>
          <TableCell>
            <Link to={`/medic/${sig.id}`}>
              {sig.name}
            </Link>
          </TableCell>
          <TableCell>
            <Link to={`/medic/${sig.id}`}>
              {sig.specialty}
            </Link>
          </TableCell>
          <TableCell>
            <Link to={`/medic/${sig.id}`}>
              {sig.academic}
            </Link>
          </TableCell>
          <TableCell>
            <Link to={`/medic/${sig.id}`}>
              {sig.city}
            </Link>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow key={sig.id}>
          <TableCell>
            {index + 1}
          </TableCell>
          <TableCell>
            {sig.title}
          </TableCell>
          <TableCell>
            {sig.name}
          </TableCell>
          <TableCell>
            {sig.specialty}
          </TableCell>
          <TableCell>
            {sig.academic}
          </TableCell>
          <TableCell>
            {sig.city}
          </TableCell>
        </TableRow>
      )
    return row
  }

  addMedic = async () => {
    const { history, notification, medic } = this.props.store
    const { academic, name, specialty, title, city } = this.state
    const response = await medic.create(title, name, specialty, academic, city)
    this.closeAdd()
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    } else {
      history.push(`/medic/${response.id}`)
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
                  Title
                </TableCell>
                <TableCell style={styles.cell}>
                  Name
                </TableCell>
                <TableCell style={styles.cell}>
                  Specialty
                </TableCell>
                <TableCell style={styles.cell}>
                  Academic
                </TableCell>
                <TableCell style={styles.cell}>
                  City
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.store.medic.list.data.map(
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
          style={{ position: 'absolute', top: 90, right: 20 }}
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
              <TextField
                label="title"
                value={this.state.title}
                onChange={this.changeValue('title')}
              />
              <TextField
                label="city"
                value={this.state.city}
                onChange={this.changeValue('city')}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeAdd} color="secondary">Cancel</Button>
              <Button onClick={this.addMedic} color="primary">Add</Button>
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


export default withStore(MedicsList)
