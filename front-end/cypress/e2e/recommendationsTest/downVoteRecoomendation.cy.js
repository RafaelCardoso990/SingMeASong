import recommendationFactory from './factory/recommendationsFactory.js'

describe('Home Screen', () => {
    it("Should upvote an recommendation", () => {
        cy.seedDB()

        cy.intercept('GET', `${recommendationFactory.URL_BACK}`).as('getRecommendations')
        cy.visit(recommendationFactory.URL_FRONT)
        cy.wait('@getRecommendations')

        cy.intercept('POST', `${recommendationFactory.URL_BACK}/1/downvote`).as('downVote')
        cy.get('article div svg').eq(1).click()
        cy.wait('@downVote')
       
        cy.get('article div').should('contain.text', '1')
    })
})