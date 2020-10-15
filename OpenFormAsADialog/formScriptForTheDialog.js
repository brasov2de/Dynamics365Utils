
function Dianamics_Onload(executionContext){
    const formContext = executionContext.getFormContext();

    //hide header and footer
    formContext.ui.footerSection.setVisible(false);
    formContext.ui.headerSection.setBodyVisible(false);
    formContext.ui.headerSection.setCommandBarVisible(false);
    formContext.ui.headerSection.setTabNavigatorVisible(false);

    //set all attributes in "never" submit
    formContext.data.entity.attributes.forEach((attribute) =>   attribute.setSubmitMode  && attribute.setSubmitMode("never"))


    const myAction = function(){
        const myAttributeNames = ["orb_comment", "orb_count", "orb_optionsetcode"];
        const dataToSave = myAttributeNames.map((attributeName) => {
            const attribute = formContext.getAttribute(attributeName);
            return [attributeName, attribute.getValue()];
        })
        const isDirty = dataToSave.some(([attrName, value]) => value!=null)
        if(isDirty===true){            
            Xrm.Navigation.openAlertDialog({text: `Here I can make whatever I need with: ${JSON.stringify(dataToSave)}`})
                .then(() => formContext.ui.close());
        }
        else{
            formContext.ui.close();        
        }
    }

    formContext.getAttribute("orb_action").addOnChange(myAction);

}