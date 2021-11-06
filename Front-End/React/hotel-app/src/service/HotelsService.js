function goldHotelsService(){
    return fetch('http://localhost:4200/gold-area')
            .then(res => res.json())
}

export default goldHotelsService;
