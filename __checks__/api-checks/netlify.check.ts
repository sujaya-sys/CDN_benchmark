import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('netlify-api-check', {
  name: 'Netlify API Check',
  activated: true,
  frequency: Frequency.EVERY_1M, 
  request: {
    method: 'GET',
    url: 'https://www.netlify.com/platform/core/edge',
    skipSSL: false, 
    followRedirects: true, 
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ]
  }
});
