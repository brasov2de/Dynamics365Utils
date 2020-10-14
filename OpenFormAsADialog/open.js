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
        formId: "830fb574-f340-40e6-ad64-93b2033a1c6e" //the form customized for the dialog
    }, {
        target: 2, 
        width: 600, 
        height: 350, 
        position: 1
    }).then(console.log, console.error)

    