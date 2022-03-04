/// <reference types= "cypress" />
//This function is to describe the test suite
describe("Instagram Login Test suite", function () {
    //This function is to describe the test case
    it("Instagram login", function () {
        //Visit instagram.
        cy.visit("https://www.instagram.com/");
        //Spy out the user name input field.
        cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ")
            //Type your username
            .type("qualestest");
        //spy on the password field
        cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ")
            //Type password
            .type("qualestest123");
        //spy login button
        cy.get(".sqdOP > .qF0y9").click();
        //inspect search box
        cy.get(".eyXLr")
            //assert that the seacrh box is visible
            .should("be.visible")
            //search for adetuire
            .type("adetuire");
        //click on search 
        cy.get(":nth-child(1) > .-qQT3 > .XfCBB").click;

    });
});