require("../../support/user/usersRequest")

describe('Validate Users Info', () => {
    it('Validate Single User', () => {
        cy.getSingleUser()
        cy.get('@getSingleUserResponse').then(response => {
            expect(response.status).to.equal(200)

            // Get body response
            var respBody = response.body;
            expect(respBody['data']['first_name']).to.have.string('Janet')
        })
    })

    it('Validate Single User', () => {
        cy.getSingleUser()
        cy.get('@getSingleUserResponse').then(response => {
            expect(response.status).to.equal(200)

            // Get body response
            var respBody = response.body;
            expect(respBody['data']['first_name']).to.have.string('Janet')
        })
    })
})