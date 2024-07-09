class validate_input{
    constructor(data){
        this.data = data;
        this.input_firstName = '#firstname';
        this.input_lastName = '#surname';
        this.input_age = '#age';
        this.input_country = '#country';
        this.area_notes = '#notes';
        this.input_submit = '[type="submit"]';
    }
    visitWePage(){
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html");
    }
    fillFirstName(){
        cy.get(this.input_firstName).type(this.data.firstname);
    }
    fillLastName(){
        cy.get(this.input_lastName).type(this.data.surname);
    }
    fillFillAge(){
        cy.get(this.input_age).type(this.data.age);
    }
    selectCountry(){
        cy.get(this.input_country).select(this.data.country);
    }
    fillNotes(){
        cy.get(this.area_notes).type(this.data.notes);
    }
    clickOnSubmit(){
        cy.get(this.input_submit).click();
    }
    completeRegisterForm(){
        this.visitWePage();
        this.fillFirstName();
        this.fillLastName();
        this.fillFillAge();
        this.selectCountry();
        this.fillNotes();
        this.clickOnSubmit();
    }
    AssertResult(){
        const tags = ['firstname','surname','age','country','notes'];
        for(const v of tags){
            cy.get(`#${v}-value`).invoke('text').then((text)=>{
                switch (v){
                    case 'firstname':
                        expect(text).to.eq(this.data.firstname);
                        break;
                    case 'surname':
                        expect(text).to.eq(this.data.surname);
                        break;
                    case 'age':
                        expect(text).to.eq(this.data.age);
                        break;
                    case 'country':
                        expect(text).to.eq(this.data.country);
                        break;
                    case 'notes':
                        expect(text).to.eq(this.data.notes);
                        break;
                }
            })
        }
        
    }
}
module.exports = validate_input