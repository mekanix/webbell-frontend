import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core'

import { withStore } from 'freenit'
import { errors } from 'utils'
import styles from './styles'


class MedicList extends React.Component {
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
    return (
      <Badge
        color="primary"
        badgeContent={this.props.store.medic.list.total}
      >
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h5" data-id="roles">
              Medics
            </Typography>
            <Typography color="textSecondary">
              All medics
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/medics">
              <Button variant="outlined" size="small">Explore</Button>
            </Link>
          </CardActions>
        </Card>
      </Badge>
    )
  }
}


MedicList.propTypes = {
  store: PropTypes.shape({
    medic: PropTypes.shape({
      list: PropTypes.shape({
        total: PropTypes.number.isRequired,
      }).isRequired,
      getCount: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
}


export default withStore(MedicList)
