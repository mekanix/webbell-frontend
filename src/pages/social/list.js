import React from 'react'
import { Link } from 'react-router-dom'
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { withStore } from 'freenit'
import { errors } from 'utils'
import Template from 'templates/default/detail'

import styles from './styles'


class SocialsList extends React.Component {
  state = {
    fetching: true,
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
              {sig.title}
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
          <TableCell>
            <Link to={`/social/${sig.id}`}>
              {sig.academic}
            </Link>
          </TableCell>
          <TableCell>
            <Link to={`/social/${sig.id}`}>
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
              {this.props.store.social.list.data.map(
                (sig, index) => this.generateRow(sig, index)
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )
    return (
      <Template style={{}}>
        <Paper style={styles.paper}>
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
