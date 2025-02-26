import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('akamai-api-check', {
  name: 'Akamai API Check',
  activated: true,
  frequency: Frequency.EVERY_1M, 
  request: {
    method: 'GET',
    url: 'https://www.adobe.com',
    skipSSL: false, 
    followRedirects: true, 
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ]
  }
});
