const axios = require('axios');
const getUsersJsonSchema = require('./testData/getUsers.v1.json');

describe('API USERS GET tests', function () {
    let result;
    beforeAll(async () => {
        result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users', {
            headers: {
            'accept': 'text/plain; v=1.0'
            }
        });
    });

    test('GET /api/v1/Users should be status 200', async () => {
        expect(result.status).toEqual(200);
    });

    test('GET /api/v1/Users should be valid json schema', async () => {
        expect(result).toBeValidSchema(getUsersJsonSchema);
    });
});