Cypress.Commands.add('createUser', () => {
    cy.fixture('createUserFixture').then(userFixture => {
        return cy.request('POST','https://reqres.in/api/users', userFixture)
            .as('createUserResponse')
    })
})

Cypress.Commands.add('postUpdateUser', () => {
    cy.fixture('updateUserFixture').then(userFixture => {
        return cy.request('PUT','https://reqres.in/api/users/2', userFixture)
            .as('postUpdateUserResponse')
    })
})

Cypress.Commands.add('patchUpdateUser', () => {
    cy.fixture('updateUserFixture').then(userFixture => {
        return cy.request('PATCH','https://reqres.in/api/users/2', userFixture)
            .as('patchUpdateUserResponse')
    })
})

Cypress.Commands.add('deleteUser', () => {
    return cy.request('DELETE','https://reqres.in/api/users/2', userFixture)
        .as('deleteUserResponse')
})