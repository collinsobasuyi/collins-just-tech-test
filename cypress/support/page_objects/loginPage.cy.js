
export class LoginPage {

    getCookieBanner() {
        return cy.get('#onetrust-accept-btn-handler:visible')
    }
    getloginDashbordLink() {
        return cy.get('[data-cy="login-dashbord-link"]')
    }
    getSignInWithEmailLink() {
        return cy.contains('Sign in with my email address')
    }
    getLoginEmail() {
        return cy.get('[data-cy="loginEmail-input"]')
    }
    getLoginPassword() {
        return cy.get('[data-cy="loginPassword-input"]')
    }
    getSignInButton() {
        return cy.contains('Sign in')
    }

    getFindParking() {
        return cy.get('.c-header__mobile-scroll > :nth-child(1) [data-cy="find-parking"] > a')
    }

    getSearchBox() {
        return cy.get("#search-box")
    }

    getResultItems() {
        return cy.get('.c-predictive-search-input__result-item')
    }

    getCheckoutDate() {
        return cy.get('.c-checkoutModal__dates')
    }

    getChevronIconRight() {
        return cy.get('[aria-label="Move forward to switch to the next month."] > .c-chevron-icon')
    }

    getAddanHour() {
        return cy.get('[aria-label="subtract one hour"]')
    }

    getfutureDate() {
        return cy.get('[aria-label="Friday, September 30, 2022"]')
    }

    getCloseDatePickerButton() {
        return cy.get('[data-cy="datepicker-close-button"]').should('contain', 'Done')
    }

    getCheckoutConfirmButton() {
        return cy.get('.c-checkoutModal__confirm').should('contain', 'Continue')
    }

    getInfoValidationBox() {
        return cy.get('[data-cy="info-box-null"]')
    }

    getAddphonenumber() {
        return cy.get('.c-personalDetails__phoneInputs__input')
    }

    getInputVehicle() {
        return cy.get('.c-input__inputbox')
    }

    getAddVehicle() {
        return cy.get('.bt--secondary')
    }

    getSaveAndContinue() {
        return cy.get('.c-personalDetails__vehicles > .bt')
    }

    getEditPersonalDetails() {
        return cy.contains('Edit personal details')
    }
    getDeleteVehicle() {
        return cy.get('[data-cy="null-item-button"]')
    }
    
    getLogOut() {
        return cy.get('b').should('contain','logout')

    }
    


}

export const onLoginPage = new LoginPage()