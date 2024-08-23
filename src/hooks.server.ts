import { dev } from '$app/environment'
import { handleGraphiql } from '@kitql/all-in'
import { sequence } from '@sveltejs/kit/hooks'

export const handle = sequence(
  // Add graphiql
  handleGraphiql({
    endpoint: 'https://matavavk.swedencentral.cloudapp.azure.com/shop-api',
    enabled: dev,
  })
)
