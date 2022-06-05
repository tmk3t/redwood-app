export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    # Note that having at least one schema directive is required for each Query and Mutation or you'll get an error: Redwood embraces the idea of "secure by default" meaning that we try and keep your application safe, even if you do nothing special to prevent access.
    # Remember: we haven't added authentication yet, so the concept of someone being logged in is meaningless right now. In order to prevent frustrating errors in a new application, the @requireAuth directive simply returns true until you setup an authentication system. At that point the directive will use real logic for determining if the user is logged in or not and behave accordingly.
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
    # Redwood assumes your code won't try to set a value on any field named id or createdAt so it left those out of the Input types, but if your database allowed either of those to be set manually you can update CreateContactInput or UpdateContactInput and add them.
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
  }
`
