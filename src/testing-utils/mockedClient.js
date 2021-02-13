import typeDefs from '../api/schema'
import setupClient from 'apollo-client-mock'

const defaultMocks = {
  Query: () => ({
    //subDomainState = () => [],
    domainState() {
      return {
        name: 'vitalik.' + process.env.REACT_APP_ENS_TLD,
        state: 'Forbidden',
        __typename: 'NodeState'
      }
    },
    nodes: () => []
  }),
  Mutation: () => ({
    getDomainState: (_, { name }, context) => {
      return {
        name,
        state: 'Open'
      }
    }
  })
}

const createClient = setupClient(defaultMocks, typeDefs)

export default createClient
