import * as React from 'react'
import { Control, Form } from 'react-redux-form'
import {
  Button,
  Container,
  Heading,
  SubHeadingLink,
} from '../../../../components/Authorisation'
import ErrorMessages from '../../../../components/ErrorMessages'
import Fieldset from '../../../../components/Fieldset'
import Input from '../../../../components/Input'
import { ROUTE_LOGIN } from '../../../../config'
import { FORM_STATE_PATH } from '../../constants'

export interface Props {
  errorMessage?: string
  onRegisterClick: () => any
}

export default function Register({ errorMessage, onRegisterClick }: Props) {
  return (
    <Container>
      <Heading>Register</Heading>
      <SubHeadingLink route={ROUTE_LOGIN}>Have an account?</SubHeadingLink>

      {errorMessage && <ErrorMessages errors={[errorMessage]} />}

      <Form model={FORM_STATE_PATH} hideNativeErrors>
        <Fieldset>
          <Control.text
            model=".username"
            component={Input}
            placeholder="Username"
          />
        </Fieldset>

        <Fieldset>
          <Control.text model=".email" component={Input} placeholder="Email" />
        </Fieldset>

        <Fieldset>
          <Control
            type="password"
            model=".password"
            component={Input}
            placeholder="Password"
          />
        </Fieldset>
      </Form>

      <Button onClick={onRegisterClick}>Register</Button>
    </Container>
  )
}
