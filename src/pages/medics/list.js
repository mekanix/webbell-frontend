import React from 'react'
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


class MedicsList extends React.Component {
  state = {
    fetching: true,
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { medics, notification } = this.props.store
    const response = await medics.fetchAll()
    this.setState({ fetching: false })
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
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
              {this.props.store.medics.list.data.map((sig, index) => (
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
              ))}
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


export default withStore(MedicsList)
