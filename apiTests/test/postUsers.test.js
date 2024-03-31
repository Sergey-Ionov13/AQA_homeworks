const axios = require('axios');
const postUsersJsonSchema = require('./testData/postUsers.v1.json');

describe('API USERS POST tests', function () {
    let result;
    beforeAll(async () => {
        result = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users', {
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

    test('POST /api/v1/Users should be status 200', async () => {
        expect(result.status).toEqual(200);
    });

    test('POST /api/v1/Users should be valid json schema', async () => {
        expect(result).toBeValidSchema(postUsersJsonSchema);
    });
});
