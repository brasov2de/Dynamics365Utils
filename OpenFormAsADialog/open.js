//this is an example how to open a form as a dialog

Xrm.Navigation.navigateTo(
    {
        pageType: "entityrecord", 
        entityName: "orb_dialog", //entity where the form for dialog was customized
        createdFromEntity: { 
            entityType: "orb_testentity", 
            id: Xrm.Page.data.entity.getId(), 
            name: "dummy"
        },
        entityId: "83BD09D6-930D-EB11-A813-000D3A23CB53",  //specify this id if you have defined a special Dialog-Record in your entity, because of the naming issue
        formId: "830fb574-f340-40e6-ad64-93b2033a1c6e" //the form customized for the dialog
    }, {
        target: 2, 
        width: 600, 
        height: 350, 
        position: 1
    }).then(console.log, console.error)

    
