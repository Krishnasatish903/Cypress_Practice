const typeText = ({locator: locatorBtn, value: typeValue})=>{
cy.get(locatorBtn).type(typeValue);
};

const clickAction = ({locator: locatorBtn})=>{
cy.get(locatorBtn).click({force: true});
};

const clickAndType = ({locator: locatorBtn, value: textValue})=>{
    cy.get(locatorBtn).click().type(textValue);
};

const uploadFile= ({locator: locatorBtn, path:filePath })=>{
    cy.get(locatorBtn).selectFile(filePath);
};

const verifyText = ({ locator: locatorBtn, verifyText: txtVerification }) => {
    cy.get(locatorBtn).should('have.text', txtVerification);
  };

  const radioBtnSelected = ({locator: locatorBtn}) =>{
    cy.get(locatorBtn).should('be.checked');
  };

  const suggestionListDropDown = ({locator: locatorBtn, value : textValue, exactText: ddExctValue})=>{
    cy.get(locatorBtn)
    .type(textValue)
    .get('#ui-id-1 > li')
    .each((ele)=>{
        const ddValue = ele.text().trim();
        if(ddValue === ddExctValue){
            console.log(ddValue);
            cy.log(ddValue);
           cy.wrap(ele).click({force:true});
        }

    })
  };

  const selectDropDown = ({locator: locatorBtn, value: dropDownValue})=>{
    cy.get(locatorBtn).select(dropDownValue)
  };

  

export{
    typeText, 
    clickAction,
    clickAndType,
    uploadFile,
    verifyText,
    radioBtnSelected, 
    suggestionListDropDown,
    selectDropDown
}