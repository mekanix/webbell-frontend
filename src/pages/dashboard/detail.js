import React from 'react'
import {
  Paper,
} from '@material-ui/core'

import {
  RoleList,
  UserList,
} from 'freenit'
import Template from 'templates/default/detail'

import {
  MedicList,
  SocialList,
} from 'components'

import styles from './styles'


class AdminDashboard extends React.Component {
  render() {
    return (
      <Template secure style={{}}>
        <Paper style={styles.root}>
          <UserList />
          <RoleList />
          <MedicList />
          <SocialList />
        </Paper>
      </Template>
    )
  }
}


export default AdminDashboard
