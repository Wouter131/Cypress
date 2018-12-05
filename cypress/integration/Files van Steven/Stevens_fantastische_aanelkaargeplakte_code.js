/// <reference types="cypress" />

describe('Cypress.io', function () {
    it('Should open the main page', function () {
        //Opdracht 1 Login als Wordpress admin 
        cy.visit("http://192.168.99.100:8080//")
        cy.get(".site-title a").should('have.attr', 'href' ,'http://192.168.99.100:8080/') 
        cy.contains("Log in").scrollIntoView({ duration: 2000 }).click()
        cy.wait(10)
        cy.get("#user_login").click().type("steven")
        cy.wait(10)
        cy.get("#user_pass").click().type("Polaris@01")
        cy.wait(10)
        cy.get("#wp-submit").contains("Log In").click()
        cy.wait(10)
        cy.url().should('eq', 'http://192.168.99.100:8080/wp-admin/')
        cy.wait(10) 
        //Opdracht 2 Maak een post aan
        cy.get("#menu-posts > a > div.wp-menu-name").click()
        cy.wait(10)
        cy.url().should('eq', 'http://192.168.99.100:8080/wp-admin/edit.php')
        cy.wait(10)
        cy.contains("Add New").click()
        cy.wait(10)
        cy.get("#title").click().type("Eerste Post")
        cy.wait(10)
        cy.get("#content-html").click()
        cy.wait(10)
        cy.get("#content").click().type("Eerste post tekst")
        cy.wait(10)
        cy.get("#content-tmce").click()
        cy.wait(10)
        cy.get("#publish").click()
        cy.wait(10)
        cy.contains("View Post").click()
        cy.wait(10)
        cy.contains("Cypress.io").click()
        cy.wait(10)
        cy.get(".content-area").find(".entry-title a")
        cy.wait(10)
        //Opdracht 3 Maak een user aan
        cy.get("#meta-2 > ul > li:nth-child(1) > a").contains("Site Admin").click()
        cy.wait(10)
        cy.get("#menu-users > a > div.wp-menu-name").click()
        cy.wait(10)
        cy.get("#wpbody-content > div.wrap > a").contains("Add New").click()
        cy.wait(10)
        cy.get("#user_login").click().type("testuser")
        cy.wait(10)
        cy.get("#email").click().type("stevendebruin@gmail.com")
        cy.wait(10)
        cy.get("#createusersub").click()
        cy.wait(10)
        cy.get("#the-list").contains("testuser")
        cy.wait(10)
        cy.get("#the-list tr td").contains("testuser").trigger('mouseover').parent().parent().contains("Delete").click({force:true})
        cy.wait(10)
        cy.get("#submit").click()   
        cy.wait(10)     
        cy.get("#wp-admin-bar-site-name > a").click()
        cy.wait(10)
        //Opdracht 4 Maak een comment op een van de posts aan met een user ander dan de admin
        cy.contains("Cypress.io").click()
        cy.wait(10)   
        cy.contains("Log out").scrollIntoView({ duration: 2000 }).click()
        cy.wait(10)
        cy.get("#user_login").click().type("Admin")
        cy.wait(10)
        cy.get("#user_pass").click().type("Polaris@02")
        cy.wait(10)
        cy.get("#wp-submit").contains("Log In").click()
        cy.wait(10)
        cy.contains("Cypress.io").click()
        cy.wait(10)          
        cy.get(".entry-title").contains("Eerste Post").click() 
        cy.wait(10)
        cy.get("#comment").click().type("Commentaar")
        cy.wait(10)
        cy.get("#submit").click()
        cy.wait(10)
        cy.contains("Cypress.io").click()
        cy.wait(10)   
        cy.contains("Log out").scrollIntoView({ duration: 2000 }).click()
        cy.wait(10)
        cy.get("#user_login").click().type("steven")
        cy.wait(10)
        cy.get("#user_pass").click().type("Polaris@01")
        cy.wait(10)
        cy.get("#wp-submit").contains("Log In").click()
        //Opdracht 5 Maak een Page aan onder de Menu structuur
        cy.get("#menu-pages > a > div.wp-menu-name").click()
        cy.wait(10)
        cy.get("#wpbody-content > div.wrap > a").contains("Add New").click()
        cy.wait(10)
        cy.get("#title").click().type("testpagina")
        cy.wait(10)
        cy.get("#parent_id").select("Sample Page")
        cy.wait(10)
        cy.get("#publish").click()
        cy.wait(10)
        cy.contains("View Page").click()
        cy.wait(10)
        cy.contains("Cypress.io").click()
        cy.wait(10)       
        //Opdracht 6 Delete de post die je net hebt aangemaakt
        cy.get("#meta-2 > ul > li:nth-child(1) > a").contains("Site Admin").click()
        cy.wait(10)
        cy.url().should('eq', 'http://192.168.99.100:8080/wp-admin/')
        cy.wait(10) 
        cy.get("#menu-posts > a > div.wp-menu-name").click()
        cy.wait(10) 
        cy.get(".row-title").contains("Eerste Post").click()
        cy.wait(10)
        cy.get("#delete-action > a").contains("Move to Trash").click()
        //Opdracht 6.2 Batch delete alle posts die zijn aangemaakt - to do
    });
});