class FibonacciResourceClient {
    constructor() {
        this._urlfibonacci = "";
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