const resolvers = {
  Query: {
    users: () => [
      { id: 1, email: 'john.doe@example.com', name: 'John Doe' },
      { id: 2, email: 'jane.smith@example.com', name: 'Jane Smith' },
      { id: 3, email: 'alice.jones@example.com', name: 'Alice Jones' },
      { id: 4, email: 'bob.brown@example.com', name: 'Bob Brown' }
    ]
  }
}

export default resolvers
