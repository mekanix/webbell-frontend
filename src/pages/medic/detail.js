import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Paper,
  TextField,
} from '@material-ui/core'
import { withStore } from 'freenit'
import { errors } from 'utils'
import Template from 'templates/default/detail'

import styles from './styles'


class Medic extends React.Component {
  state = {
    id: 0,
    name: '',
    academic: '',
    city: '',
    specialty: '',
    delete: false,
  }

  constructor(props) {
    super(props)
    this.fetch(props.match.params.id)
  }

  fetch = async (id) => {
    const { medic, notification } = this.props.store
    const response = await medic.fetch(id)
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    } else {
      this.setState(response)
    }
  }

  handleField = (field) => (event) => {
    this.setState({ [field]: event.target.value })
  }

  cancel = (field) => () => {
    this.setState({ [field]: this.props.store.medic.detail[field] })
  }

  change = (field) => async () => {
    const { medic, notification } = this.props.store
    const response = await medic.edit(
      this.props.match.params.id,
      { [field]: this.state[field] },
    )
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    } else {
      notification.show(`Successfully changed ${field}`)
    }
  }

  showDelete = () => {
    this.setState({ delete: true })
  }

  hideDelete = () => {
    this.setState({ delete: false })
  }

  deleteMedic = async () => {
    const { history, medic, notification } = this.props.store
    const response = await medic.remove(this.props.match.params.id)
    if (response.ok) {
      this.hideDelete()
      history.push('/medics')
    } else {
      const error = errors(response)
      notification.show(error.message)
    }
  }

  render() {
    return (
      <Template style={{}} secure>
        <Paper style={styles.paper}>
          <Dialog open={this.state.delete} onClose={this.hideDelete}>
            <DialogTitle>Delete!</DialogTitle>
            <DialogActions>
              <Button
                color="primary"
                variant="outlined"
                onClick={this.hideDelete}
              >
                Cancel
              </Button>
              <Button
                onClick={this.deleteMedic}
                color="secondary"
                variant="contained"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
          <div style={styles.field}>
            <TextField
              label="title"
              value={this.state.title}
              onChange={this.handleField('title')}
            />
            <Button
              variant="outlined"
              color="secondary"
              style={styles.cancel}
              onClick={this.cancel('title')}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.change('title')}
            >
              OK
            </Button>
          </div>
          <div style={styles.field}>
            <TextField
              label="name"
              value={this.state.name}
              onChange={this.handleField('name')}
            />
            <Button
              variant="outlined"
              color="secondary"
              style={styles.cancel}
              onClick={this.cancel('name')}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.change('name')}
            >
              OK
            </Button>
          </div>
          <div style={styles.field}>
            <TextField
              label="specialty"
              value={this.state.specialty}
              onChange={this.handleField('specialty')}
            />
            <Button
              variant="outlined"
              color="secondary"
              style={styles.cancel}
              onClick={this.cancel('specialty')}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.change('specialty')}
            >
              OK
            </Button>
          </div>
          <div style={styles.field}>
            <TextField
              label="academic"
              value={this.state.academic}
              onChange={this.handleField('academic')}
            />
            <Button
              variant="outlined"
              color="secondary"
              style={styles.cancel}
              onClick={this.cancel('academic')}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.change('academic')}
            >
              OK
            </Button>
          </div>
          <div style={styles.field}>
            <TextField
              label="city"
              value={this.state.city}
              onChange={this.handleField('city')}
            />
            <Button
              variant="outlined"
              color="secondary"
              style={styles.cancel}
              onClick={this.cancel('city')}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.change('city')}
            >
              OK
            </Button>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.showDelete}
            style={styles.delete}
          >
            Delete
          </Button>
        </Paper>
      </Template>
    )
  }
}


export default withStore(Medic)
