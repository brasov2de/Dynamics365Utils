

async function Dianamics_OpenTheRecordSidePane(executionContext){
    const paneId = "diana_OppPosYearSidePane";
    const formContext = executionContext.getFormContext();
    const  entityName = formContext.data.entity.getEntityName();
    const recordId = formContext.data.entity.getId();
    if(recordId==null){
        return;
    }    
    const pane = Xrm.App.sidePanes.getPane(paneId) ?? await Xrm.App.sidePanes.createPane({       
            paneId: paneId,
            canClose: true
        });                
    pane.width = 600;  
    pane.navigate({
                pageType: "entityrecord",
                entityName: entityName,
                entityId : recordId
        });
      
}



function Dianamics_RegisterMessageListener(executionContext){
    const formContext = executionContext.getFormContext();
    window.addEventListener("message", (e) => { 			
        console.log("registered OnMessage", e);
        if (e.data?.messageName === "Dianamics.SidePaneChanged") {		        
          const data = e.data.data;
          console.log(data);
          if(formContext.data.entity.getEntityName() == data.entityName && formContext.data.entity.getId() == data.recordId){
              formContext.data.refresh(true);
          }
          else{
            //check if it's the subgrid
            formContext.ui.controls.get("Positions")?.refresh();
          }
         }
      });    
    };



