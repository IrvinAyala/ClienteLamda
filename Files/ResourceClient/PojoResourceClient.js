class PojoResourceClient {
    constructor() {
        this._urlpojo = "https://q0r0kgr0tl.execute-api.us-east-2.amazonaws.com/tpistage/seleccionesmundial";
    }

    findByGroup(group,type) {
        let init = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "group": group,
                "caze": type
            })
        };
        return fetch(this._urlpojo, init);
    }

}
export default PojoResourceClient;