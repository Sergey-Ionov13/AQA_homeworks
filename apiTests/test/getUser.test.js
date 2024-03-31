const axios = require('axios');
const getUserJsonSchema = require('./testData/postUsers.v1.json');

describe('API USER GET tests', function () {
    let result;
    beforeAll(async () => {
        result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users/1', {
            headers: {
            'accept': '*/*'
            }
        });
    });

    test('GET /api/v1/Users/{id} should be status 200', async () => {
        expect(result.status).toEqual(200);
    });

    test('GET /api/v1/Users/{id} should be valid json schema', async () => {
        expect(result).toBeValidSchema(getUserJsonSchema);
    });
});