
const { test, expect } = require('@playwright/test');

test.describe('API Testing', () => {

  test('Verify GET API response', async ({ request }) => {

    const response = await request.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    // Verify status code
    expect(response.status()).toBe(200);

    // Convert response into JSON
    const responseBody = await response.json();

    // Verify response data
    expect(responseBody.id).toBe(1);

    expect(responseBody.userId).toBe(1);

    expect(responseBody.title).toBeTruthy();

    console.log(responseBody);

  });

});
