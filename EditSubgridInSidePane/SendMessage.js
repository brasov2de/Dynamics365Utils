

function Dianamics_RegisterSendMessage(executionContext){

    function sendMessageFromSidePane(executionContext){
        const formContext = executionContext.getFormContext();
        const entityName = formContext.data.entity.getEntityName();
        const recordId = formContext.data.entity.getId();
        Array.from(parent.frames).forEach((frame) => {
            frame.postMessage({
                messageName: "Dianamics.SidePaneChanged", 
                data: {
                    entityName: entityName,
                    recordId: recordId
                }
            }, "*");
        });       
    }
    
    const formContext = executionContext.getFormContext();
    formContext.data.entity.addOnPostSave(sendMessageFromSidePane);
    
 
}