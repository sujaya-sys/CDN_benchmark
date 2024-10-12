import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('fastly-api-check', {
  name: 'Fastly API Check',
  activated: true,
  frequency: Frequency.EVERY_1M, 
  request: {
    method: 'GET',
    url: 'https://www.fastly.com',
    skipSSL: false, 
    followRedirects: true, 
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ]
  }
});
