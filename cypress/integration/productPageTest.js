/// <reference types="cypress"/>

describe("Testing Geared Up Apparel", () => {

    before(() => {
        cy.visit("http://localhost/WebProjects/Bus%20Ticketing%20System/J-S%20Product%20Page/");
    });

    // Clearing cookies and local storage before each test 
    beforeEach(()=>{
        cy.clearCookies();  
        cy.clearLocalStorage();
    })
  
// Adding first product 
    it ("Adding GEARED UP TRIPLE BLACK SHOES",()=>{
        cy.get(".main-container").eq(0).then(($element)=>{
            cy.log($element); 
            cy.wrap($element).children().last().then(($element)=>{
                cy.log($element);
                cy.screenshot(); 
                cy.wrap($element).children().should("have.length", 6).then(($element)=>{
                    cy.log($element); 
                    cy.wrap($element).eq(4).should("have.id", "prod1addBtn").
                    click();
                   
                }); 
            });
        });
    });

    // Adding Second and third Products
    it("Adding 2 GEARED UP BACK-TO-SCHOOL BACKPACKS", ()=>{
        cy.get(".main-container").eq(1).then(($element)=>{
            cy.log($element); 
            cy.wrap($element).children().find('button').eq(0).then(($element)=>{
                cy.log($element); 
                cy.wrap($element).should("have.id", "prod2addBtn").dblclick(); 
            }); 
        })
    })

    // Adding fourth Product
    it("Adding GEARED UP BLACK SHORT SLEEVES T-SHIRT", ()=>{
        cy.get(".main-container").eq(2).then(($element)=>{
            cy.log($element); 
            cy.wrap($element).children().eq(1).children().then(($element)=>{
                cy.log($element); 
                cy.wrap($element).eq(4).should("have.id","prod3addBtn").click(); 
            }); 
        })

    })

    // Adding fifth product 
    it("Adding ARROW EARRINGS", ()=>{
        cy.get(".main-container").eq(3).children().then(($element)=>{
            cy.log($element);
                cy.wrap($element).last().find("button").eq(0).then(($element)=>{
                    cy.log($element); 
                    cy.wrap($element).should("have.id", "prod4addBtn").click(); 
                })
        });
    })

});