const { expect, test } = require('@playwright/test')

test.setTimeout(210000)

test.use({ actionTimeout: 10000 })
for (let i =0; i<20; i++)
test('visit page and take screenshot'+i, async ({ page }) => {
  //console.log(process.env)
  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  const response = await page.goto(process.env.ENVIRONMENT_URL || 'https://www.imperva.com')

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.jpg' })

  // Test that the response did not fail
  expect(response.status(), 'should respond with correct status code').toBeLessThan(400)
})
