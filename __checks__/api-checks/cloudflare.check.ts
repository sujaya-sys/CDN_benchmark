import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('cloudflare-api-check', {
  name: 'Cloudflare API Check',
  activated: true,
  frequency: Frequency.EVERY_1M, 
  request: {
    method: 'GET',
    url: 'https://www.cloudflare.com',
    skipSSL: false, 
    followRedirects: true, 
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ]
  }
});
