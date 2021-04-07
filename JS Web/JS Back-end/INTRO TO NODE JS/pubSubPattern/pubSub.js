let methods = {}

module.exports = {
    publish(event, model){
        if(methods[event]){
            methods[event]
            .forEach(callBack => {
                callBack(model);
            });
        }
    },

    subscribe(event, func){
        if(!methods[event]){
            methods[event] = [];
        }

        methods[event].push(func);
    }
}