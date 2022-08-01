import recommendationFactory from './factory/recommendationsFactory.js'

describe('Home Screen', () => {
  it('Should upvote an recommendation', async () => {
    cy.seedDB()

    cy.intercept('GET', `${recommendationFactory.URL_BACK}`).as('getRecommendations')
    cy.visit(recommendationFactory.URL_FRONT)
    cy.wait('@getRecommendations')

    cy.intercept('POST', `${recommendationFactory.URL_BACK}/1/upvote`).as('upVote')
    cy.get('article div svg:first').click()
    cy.wait('@upVote')

    cy.get('article div').eq(4).should('contain.text', 1)
  })
})