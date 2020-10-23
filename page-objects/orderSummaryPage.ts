import { NightwatchBrowser } from 'nightwatch';

const commands = {
    async proceedToCheckoutSummaryTab(browser: NightwatchBrowser){
    await browser.page.orderSummaryPage()
    .useXpath()
    .moveToElement(orderSummaryPage.elements.proceedToCheckOutSummaryTab,0,0)
    .click(orderSummaryPage.elements.proceedToCheckOutSummaryTab).useCss();
    },
    async proceedToCheckoutAddressTab(browser: NightwatchBrowser){
    await browser.page.orderSummaryPage()
    .useXpath()
    .moveToElement(orderSummaryPage.elements.proceedToCheckOutAddressTab,0,0)
    .click(orderSummaryPage.elements.proceedToCheckOutAddressTab).useCss();
    },
    async acceptTermsAndConditions(browser: NightwatchBrowser){
    await browser.page.orderSummaryPage()
        .useXpath()
        .moveToElement(orderSummaryPage.elements.termsCheckBox,0,0)
        .click(orderSummaryPage.elements.termsCheckBox).useCss();
    },
    async proceedToCheckoutShippingTab(browser: NightwatchBrowser){
    await browser.page.orderSummaryPage()
        .useXpath()
        .moveToElement(orderSummaryPage.elements.proceedToCheckOutShippingTab,0,0)
        .click(orderSummaryPage.elements.proceedToCheckOutShippingTab).useCss();
    },
    async validateOrder(browser: NightwatchBrowser) {
     // Verify Product Name
    await  browser.getText('xpath', orderSummaryPage.elements.productName, function(result) {
            this.assert.equal(result.value, 'Printed Summer Dress');
        }); 
    await browser.pause(3000);
    // Verify Product Quantity
    await  browser.getText('xpath',orderSummaryPage.elements.productQuantity, function(result) {
        this.assert.equal(result.value, '1');
    });
    // Verify total amount
    let productTotal;
    let productShipping;
    let productTotalCost;
    await  browser.getText('xpath',orderSummaryPage.elements.productTotal, function(result) {
        let val:string = String (result.value);
        val = val.slice(1,val.length);
        productTotal = parseFloat(val);
        console.log(`Product total: ${productTotal}`);
    });
    await  browser.getText('xpath',orderSummaryPage.elements.productShipping, function(result) {
        let val:string = String (result.value);
        val = val.slice(1,val.length);
        productShipping = parseFloat(val);
        console.log(`Product Shipping: ${productTotal}`);
    });
    productTotalCost = productTotal+productShipping;
    await  browser.getText('xpath',orderSummaryPage.elements.productTotalCost, function(result) {
        let val:string = String (result.value);
        val = val.slice(1,val.length);
        this.assert.equal(val, productTotalCost);
    });
}
};

export interface orderSummaryPageObject {
    elements: {
        proceedToCheckOutSummaryTab: string;
        proceedToCheckOutAddressTab: string;
        proceedToCheckOutShippingTab: string;
        termsCheckBox: string;
        productName: string;
        productQuantity: string;
        productTotal: string;
        productShipping: string;
        productTotalCost: string;
    },
    commands: any;
}

const orderSummaryPage: orderSummaryPageObject = {
    elements: {
        proceedToCheckOutSummaryTab: "//*[@id='center_column']/p[2]/a[1]/span",
        proceedToCheckOutAddressTab: "//button[@name='processAddress']",
        proceedToCheckOutShippingTab: "//button[@name='processCarrier']",
        termsCheckBox: "//*[@id='cgv']",
        productName: "//p[@class='product-name']/a",
        productQuantity: "//*[@id='product_5_19_0_397019']/td[5]/span",
        productTotal: "//*[@id='total_product']",
        productShipping: "//*[@id='total_shipping']",
        productTotalCost: "//*[@id='total_price']",
    },
    commands: [commands]
};

module.exports = orderSummaryPage;