import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('imperva-api-check', {
  name: 'Imperva API Check',
  activated: true,
  frequency: Frequency.EVERY_1M, 
  request: {
    method: 'GET',
    url: 'https://www.imperva.com/products/content-delivery-network',
    skipSSL: false, 
    followRedirects: true, 
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ]
  }
});
