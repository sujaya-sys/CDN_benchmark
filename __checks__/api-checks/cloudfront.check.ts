import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('cloudfront-api-check', {
  name: 'Cloudfront API Check',
  activated: true,
  frequency: Frequency.EVERY_1M, 
  request: {
    method: 'GET',
    url: 'https://aws.amazon.com/cloudfront',
    skipSSL: false, 
    followRedirects: true, 
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ]
  }
});
