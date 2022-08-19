/// <reference types="cypress" />
import { times } from 'lodash'
import { format, addDays } from 'date-fns'

const { onLoginPage } = require("../support/page_objects/loginPage.cy")

describe('E2E Test Automation', () => {

    before(function () {
        cy.visit('/')
        cy.fixture('test-data').then((data) => {
            this.data = data
        })
    })

    it('Test suites', function () {
        onLoginPage.getCookieBanner().click()
        onLoginPage.getloginDashbordLink().click()
        onLoginPage.getSignInWithEmailLink().click()
        onLoginPage.getLoginEmail().type(this.data.loginEmail)
        onLoginPage.getLoginPassword().type(this.data.loginPassword, { log: false })
        onLoginPage.getSignInButton().click()
        onLoginPage.getHeaderLogo().click()
        onLoginPage.getSearchBox().type("1001", { delay: 100 })
        onLoginPage.getResultItems().eq(0).click()
        cy.url().should('include', '/checkout/1001')
        onLoginPage.getCheckoutDate().click({ delay: 100 })

        times(2, () => {
            onLoginPage.getChevronIconRight().click()
        })
        onLoginPage.getfutureDate().click({ delay: 100 })
        onLoginPage.getCloseDatePickerButton().click()
        onLoginPage.getCheckoutConfirmButton().click()
        onLoginPage.getInfoValidationBox().should('include.text', this.data.validationMessage)

   
        onLoginPage.getFindParking().click()
        onLoginPage.getSearchBox().type("1001", { delay: 100 })
        onLoginPage.getResultItems().eq(0).click()
        cy.url().should('include', '/checkout/1001')

        // const twoDaysFromNow = format(addDays(new Date(), 30), 'dd-MM-yyyy')
        // cy.get(twoDaysFromNow).type(twoDaysFromNow)

        onLoginPage.getCheckoutDate().click({ delay: 100 })

        times(3, () => {
            onLoginPage.getAddanHour().click({ delay: 100 })
        })
        onLoginPage.getCloseDatePickerButton().click()
        onLoginPage.getCheckoutConfirmButton().click()
        onLoginPage.getAddphonenumber().clear().type(this.data.phoneNumber)
        onLoginPage.getInputVehicle().type(this.data.carRegistration)
        onLoginPage.getAddVehicle().click()
        onLoginPage.getSaveAndContinue().click()


        cy.contains('#personalDetails', '1. Personal Details').then(personalDetails => {
            const carRegLabel = personalDetails.find('.c-vehicle-details__registration').text()
            expect(carRegLabel).to.equal('GY67PHD')
          })

          onLoginPage.getEditPersonalDetails().click({ delay: 100 })
          onLoginPage.getAddphonenumber().clear()
          onLoginPage.getDeleteVehicle().click()
          onLoginPage.getLogOut().click()
        
    })
    
})
