const axios = require('axios');
const {Validator} = require('jsonschema');
const putUserJsonSchema = require('./testData/postUsers.v1.json');

const validator = new Validator();

describe('API USER PUT tests', function () {
    let result;
    beforeAll(async () => {
        result = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Users/1', {
            "id": 0,
            "userName": "string",
            "password": "string"
        }, {
            headers: {
            'accept': '*/*',
            'Content-Type': 'application/json; v=1.0'
            }
        });
    });

    test('PUT /api/v1/Users/{id} should be status 200', async () => {
        expect(result.status).toEqual(200)
    });

    test('PUT /api/v1/Users/{id} should be valid json schema', async () => {
        expect(validator.validate(result.data, putUserJsonSchema).valid).toEqual(true)
    });
});
