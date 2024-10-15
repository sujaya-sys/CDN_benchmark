# CDN Benchmark

This project contains **8 API** running **every 5 minutes** and **8 Browser Checks** running **every 10 minutes** in **eu-central-1** and **eu-north-1**. 
These checks target the homepages of the following eight popular CDNs: Akamai, Cloudflare, Cloudfront, Fastly, Google Cloud, Imperva, Netlify, Vercel.

All API checks have the following format:

```
import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('${cdn}-api-check', {
  name: '${cdn} API Check',
  activated: true,
  frequency: Frequency.EVERY_1M, 
  request: {
    method: 'GET',
    url: 'https://www.${cdn}.com',
    skipSSL: false, 
    followRedirects: true, 
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ]
  }
});
```

The browser checks all look as follows:

```
const { expect, test } = require('@playwright/test')

test.setTimeout(210000)

test.use({ actionTimeout: 10000 })
for (let i =0; i<20; i++)
test('visit page and take screenshot'+i, async ({ page }) => {
  const response = await page.goto(process.env.ENVIRONMENT_URL || 'https://www.${cdn}.com')
  await page.screenshot({ path: 'screenshot.jpg' })
  expect(response.status(), 'should respond with correct status code').toBeLessThan(400)
})
```

## Project Structure

```
__checks__/
├── api-checks/
│   ├── akamai.check.ts
│   ├── cloudflare.check.ts
│   ├── cloudfront.check.ts
│   ├── fastly.check.ts
│   ├── googlecloud.check.ts
│   ├── imperva.check.ts    
│   ├── netlify.check.ts    
│   └── vercel-api.check.ts
├── browser-checks/
│   ├── browser-check.ts
│   ├── akamai.spec.ts
│   ├── cloudflare.spec.ts
│   ├── cloudfront.spec.ts
│   ├── fastly.spec.ts
│   ├── googlecloud.spec.ts
│   ├── imperva.spec.ts    
│   ├── netlify.spec.ts    
│   └── vercel-api.spec.ts
```
