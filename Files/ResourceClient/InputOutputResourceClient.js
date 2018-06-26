class InputOutputResourceClient {
    constructor() {
        this._urlinputoutput = "https://q0r0kgr0tl.execute-api.us-east-2.amazonaws.com/tpistage/stream";
    }

    converterStream(text) {
        let init = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(text)
        };
        return fetch(this._urlinputoutput, init);
    }

}
export default InputOutputResourceClient;