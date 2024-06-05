const axios = require('axios');

const url = 'http://localhost:3343/api/v1/save';
const headers = { 'Content-Type': 'application/json' };
const data = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "foo@bar.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
];

async function makeApiCall() {
    try {
        const response = await axios.post(url, data, { headers });
        console.log(`Status Code: ${response.status}, Response: ${response.data}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

(async () => {
    for (let i = 0; i < 1000; i++) {
        console.log(`Call ${i + 1}`);
        await makeApiCall();
    }
})();
