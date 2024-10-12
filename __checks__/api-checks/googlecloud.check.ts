import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('google-cloud-api-check', {
  name: 'Google Cloud API Check',
  activated: true,
  frequency: Frequency.EVERY_1M, 
  request: {
    method: 'GET',
    url: 'https://cloud.google.com/cdn',
    skipSSL: false, 
    followRedirects: true, 
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ]
  }
});
