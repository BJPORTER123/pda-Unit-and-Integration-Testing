describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Do the number buttons update the display of the running total', ()=>{
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '24')
  })

  it('the arithmetical operations should multiply',()=>{
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('the arithmetical operations should add',()=>{
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })

  it('the arithmetical operations should divide',()=>{
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })
  it('the arithmetical operations should subtract',()=>{
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('the arithmetical operations should be be able to be chained',()=>{
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('the output should be as expected for decimals',()=>{
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  it('the output should be as expected for positive',()=>{
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '11')
  })

  it('the output should be as expected for negative',()=>{
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('the output should be as expected for very large numbers',()=>{
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '100000000');
  })
  it('What does the code do in exceptional circumstances? Specifically, if you divide by zero',()=>{
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'err');
  })
})