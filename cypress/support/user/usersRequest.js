Cypress.Commands.add('getSingleUser', () => {
    return cy.request('https://reqres.in/api/users/2')
        .as('getSingleUserResponse')
})

Cypress.Commands.add('getSingleUserNotFound', () => {
    return cy.request('https://reqres.in/api/users/23')
        .as('getSingleUserNotFoundResponse')
})

Cypress.Commands.add('getListUsers', () => {
    return cy.request('https://https://reqres.in/api/users?page=2')
        .as('getListUsersResponse')
})