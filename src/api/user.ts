import axios from 'axios'

import * as config from '../config'

export async function register({
  email,
  username,
  password,
}: {
  email: string
  username: string
  password: string
}) {
  try {
    const response = await axios.post(config.API_URL_REGISTER, {
      user: {
        email,
        password,
        username,
      },
    })

    return response.data.user
  } catch (error) {
    throw error
  }
}
