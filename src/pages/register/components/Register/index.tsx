import * as React from 'react'
import {
  Button,
  Container,
  Heading,
  SubHeadingLink,
} from '../../../../components/Authorisation'
import Fieldset from '../../../../components/Fieldset'
import Input from '../../../../components/Input'
import { ROUTE_LOGIN } from '../../../../config'

export default function Login() {
  return (
    <Container>
      <Heading>Sign in</Heading>
      <SubHeadingLink route={ROUTE_LOGIN}>Have an account?</SubHeadingLink>

      <Fieldset>
        <Input type="text" placeholder="Username" />
      </Fieldset>

      <Fieldset>
        <Input type="text" placeholder="Email" />
      </Fieldset>

      <Fieldset>
        <Input type="password" placeholder="Password" />
      </Fieldset>

      <Button onClick={() => null}>Sign in</Button>
    </Container>
  )
}
