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


class SignatureList extends React.Component {
  state = {
    fetching: true,
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { signature, notification } = this.props.store
    const response = await signature.fetchAll()
    this.setState({ fetching: false })
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    }
  }

  render() {
    const table = this.state.fetching
      ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div>
      )
      : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "20px" }}>
                  No.
                </TableCell>
                <TableCell style={{ fontSize: "20px" }}>
                  Title
                </TableCell>
                <TableCell style={{ fontSize: "20px" }}>
                  Name
                </TableCell>
                <TableCell style={{ fontSize: "20px" }}>
                  Specialty
                </TableCell>
                <TableCell style={{ fontSize: "20px" }}>
                  Academic
                </TableCell>
                <TableCell style={{ fontSize: "20px" }}>
                  City
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.store.signature.list.data.map((sig, index) => (
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
        <Paper style={{ padding: 20 }}>
          <h2 style={{ margin: 0, padding: "30px" }}>
            Proglas su potpisali:
          </h2>
          {table}
        </Paper>
      </Template>
    )
  }
}


export default withStore(SignatureList)
