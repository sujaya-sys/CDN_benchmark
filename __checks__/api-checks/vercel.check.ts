import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('vercel-api-check', {
  name: 'Vercel API Check',
  activated: true,
  frequency: Frequency.EVERY_1M, 
  request: {
    method: 'GET',
    url: 'https://www.vercel.com',
    skipSSL: false, 
    followRedirects: true, 
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ]
  }
});