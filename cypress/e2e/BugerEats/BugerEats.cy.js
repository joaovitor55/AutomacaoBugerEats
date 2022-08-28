/// <reference types="cypress" />
import  'cypress-file-upload' ;

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://buger-eats.vercel.app/')
    })

    
    it('Casos de Testes Home', () => {

      //Valida funcionamento do botão "Cadastre-se"
      cy.get('a').click()
      cy.location('pathname').should('include', 'deliver')
      //Valida funcionamento do botão "Voltar para Home"
      cy.get('a').click()
      cy.wait(1000)
      cy.get('h1').contains('Seja um parceiro entregador pela Buger Eats')
})


it('Casos de Testes Cadastros', () =>{
  cy.get('a').click()
  cy.location('pathname').should('include', 'deliver')

  //informa o nome
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('joao')

  //valida CPF
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('aaaa')
  cy.get('.button-success').click()
  cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').clear().type('66025944008')

  //Não foi possível validar o e-mail pela mensagem apresentada
  cy.get(':nth-child(3) > :nth-child(1) > input').type('aaa@a.com')

  //valida whatsapp
  cy.get(':nth-child(3) > :nth-child(2) > input').type('aaa')
  cy.get('.button-success').click()
  cy.get(':nth-child(3) > :nth-child(2) > .alert-error').should('have.text', 'Oops! Whatsapp com formato incorreto')
  cy.get(':nth-child(3) > :nth-child(2) > input').clear().type('44999999999')

  //valida CEP
  cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('aaa')
  cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
  cy.get(':nth-child(2) > :nth-child(1) > .alert-error').should('have.text', 'Informe um CEP válido')
  cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').clear().type('85503290')
  cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
  cy.get(':nth-child(3) > input').should('have.value', 'Rua José Tatto')
  cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value', 'Fraron')
  cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'Pato Branco/PR')

  //informa numero endereço
  cy.get(':nth-child(4) > :nth-child(1) > input').type('1')

  //Informar complemento endereço
  cy.get(':nth-child(4) > :nth-child(2) > input').type('casa')

  //valida metodos de entrega
  cy.get('.delivery-method > :nth-child(1)').click()
  cy.get('.delivery-method > :nth-child(2)').click()
  cy.get('.button-success').click()
  cy.get(':nth-child(4) > .alert-error').should('have.text', 'Oops! Selecione apenas um método de entrega')
  cy.get('.delivery-method > :nth-child(2)').click()

  //anexa imagem
  cy.get('p').selectFile('cypress/fixtures/bugereatsimagem.jpeg', {action: 'drag-drop'})
  cy.get('.button-success').click()

  cy.get('.swal2-popup').should('be.visible')

})
  })
