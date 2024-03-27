const axios = require('axios');

describe('API USER DELETE tests', function () {
    let result;
    beforeAll(async () => {
        result = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Users/1', {
            headers: {
            'accept': '*/*'
            }
        });
    });

    test('DELETE /api/v1/Users/{id} should be status 200', async () => {
        expect(result.status).toEqual(200)
    });
});
