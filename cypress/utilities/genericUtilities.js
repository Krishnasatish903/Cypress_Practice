
//enter text 
const typeText = ({locator: locatorBtn, value: typeValue})=>{
cy.get(locatorBtn).type(typeValue);
};
//click an an element
const clickAction = ({locator: locatorBtn})=>{
cy.get(locatorBtn).click({force: true});
};
//click and Type 
const clickAndType = ({locator: locatorBtn, value: textValue})=>{
    cy.get(locatorBtn).click().type(textValue);
};
//uploading file 
const uploadFile= ({locator: locatorBtn, path:filePath })=>{
    cy.get(locatorBtn).selectFile(filePath);
};
//verifying Text 
const verifyText = ({ locator: locatorBtn, verifyText: txtVerification }) => {
    cy.get(locatorBtn).should('have.text', txtVerification);
  };
  //To check the radio button is selected 
  const radioBtnSelected = ({locator: locatorBtn}) =>{
    cy.get(locatorBtn).should('be.checked');
  };
  //to select the dropdown from a suggestion list based on the text
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
  //drop down selection
  const selectDropDown = ({locator: locatorBtn, value: dropDownValue})=>{
    cy.get(locatorBtn).select(dropDownValue)
  };
  //open new window 
  const newWindoHandle = ({locator: locatorBtn})=>{
    cy.get(locatorBtn).invoke('removeAttr', 'target').click()
      };

export{
    typeText, 
    clickAction,
    clickAndType,
    uploadFile,
    verifyText,
    radioBtnSelected, 
    suggestionListDropDown,
    selectDropDown,
    newWindoHandle
}