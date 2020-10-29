import React from 'react'
import {
  Role,
} from 'freenit'
import Template from 'templates/default/detail'


const List = Role.list

class RoleList extends React.Component {
  render() {
    return (
      <Template secure style={{}}>
        <List {...this.props} />
      </Template>
    )
  }
}


export default RoleList
