class FibonacciResourceClient {
    constructor() {
        this._urlfibonacci = "https://q0r0kgr0tl.execute-api.us-east-2.amazonaws.com/tpistage/fibonacci";
    }
    get url() {
        return this._urlfibonacci;
    }
    findBySuccession(array) {
        let init = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(array)
        };
        return fetch(this._urlfibonacci, init);
    }

}
export default FibonacciResourceClient;