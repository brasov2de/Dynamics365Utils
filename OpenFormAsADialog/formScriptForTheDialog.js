
function Dianamics_Onload(executionContext){
    const formContext = executionContext.getFormContext();

    //hide header and footer
    formContext.ui.footerSection.setVisible(false);
    formContext.ui.headerSection.setBodyVisible(false);
    formContext.ui.headerSection.setCommandBarVisible(false);
    formContext.ui.headerSection.setTabNavigatorVisible(false);

    const myAttributeNames = ["orb_comment", "orb_count", "orb_optionsetcode"];
    const myAttributes = myAttributeNames.map((attrName) => [attrName, formContext.getAttribute(attrName)]);
   
    const clearAction = () => {
        const actionButton = formContext.getAttribute("orb_action");
        if(actionButton.getValue()==="Evaluate"){
            actionButton.setValue(null);
        }
    }
    
    const getMyData = () => {               
        const myValues = myAttributes.map(([attrName, attribute]) =>{ 
            const val = attribute.getValue(attrName);
                 //clear the values, this way the form won't be dirty afterwards
            attribute.setValue(null);
            return [attrName, val] 
        });
        const isDirty = myValues.some(([attrName, value]) => value!=null);        
        return {
            values : myValues,
            isDirty : isDirty
        };
    }
   
  

    const myAction = function(context, data){
        const dataToSave = data !=null ? data : getMyData();
        if(dataToSave.isDirty===true){      
            clearAction();                        
            console.log(data);  
            Xrm.Navigation.openAlertDialog({text: "Here I can make whatever I need"}).then(() => formContext.ui.close());
        }
        else{
            formContext.ui.close();        
        }
    }

    const onSave = function(saveContext){                              
        const myData = getMyData();
        if(myData.isDirty===true){
            saveContext.getEventArgs().preventDefault();          
            myAction(null, myData);                   
        }
        
    }

    formContext.data.entity.addOnSave(onSave);
    formContext.getAttribute("orb_action").addOnChange(myAction);

}