const form = require('./POM/validate_input');

describe('template spec', () => {
  beforeEach("Load data", function(){
    cy.fixture('inputs').then((data)=>{
        this.data=data
    })
  })
  it('Succes test', function() {
    const test = new form(this.data.data_success);
    test.completeRegisterForm();
    test.AssertResult();
  })
})