import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  Filter,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  SimpleList
} from 'react-admin'

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn/>
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
)

export const PostList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <List filters={<PostFilter/>} {...props}>
      {
        isSmall
          ? (
            <SimpleList
              primaryText={record => record.title}
              secondaryText={record => `${0} views`}
              tertiaryText={record => new Date().toLocaleDateString()}
            />
          )
          : (
            <Datagrid>
              <TextField source="id"/>
              <ReferenceField source="userId" reference="users">
                {/*<TextField source="id"/>*/}
                <TextField source="name"/>
              </ReferenceField>
              <TextField source="title"/>
              <EditButton/>
            </Datagrid>
          )
      }
    </List>
  )
}

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}

export const PostEdit = props => (
  <Edit title={<PostTitle/>} {...props}>
    <SimpleForm>
      <TextInput disabled source="id"/>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <TextInput source="title"/>
      <TextInput multiline source="body"/>
    </SimpleForm>
  </Edit>
)

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <TextInput source="title"/>
      <TextInput multiline source="body"/>
    </SimpleForm>
  </Create>
)
