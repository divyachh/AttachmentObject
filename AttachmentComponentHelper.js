({
    downloadFile : function (component, event, helper){
        console.log('*****');
        var actiondownload = component.get("c.loadContentVersion");
        /*actiondownload.setParams({
            "documentName":"Hero 2"
        });*/
        actiondownload.setCallback(this, function(response){
            var state = response.getState();
            console.log(state);
            if (state === "SUCCESS") {
                var response = response.getReturnValue();
                component.set("v.base64Value", response);
                component.set("v.contentType", response);
                console.log(JSON.stringify(response))
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(actiondownload);
    }
    
    
})
