/**
* This is a Checkly CLI BrowserCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
*/
import { BrowserCheck, Frequency } from 'checkly/constructs';
import * as path from 'path';
import * as fs from 'fs';

// Directory where your spec files are located
const directoryPath = path.join(__dirname);

// Get all .spec.ts files in the directory
const testFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.spec.ts'));

testFiles.forEach((testFile, index) => {
  const isAkamaiCheck = testFile === 'akamai.spec.ts'; // Check if it's the akamai spec file

  new BrowserCheck(`browser-check-${index}`, {
    name: `Browser check for ${testFile}`,
    activated: !isAkamaiCheck, // Mute the Akamai check
    muted: false,
    shouldFail: false,
    runParallel: true,
    runtimeId: '2024.02',
    locations: ['eu-central-1', 'eu-north-1'],
    tags: [],
    sslCheckDomain: '',
    frequency: Frequency.EVERY_1M,
    environmentVariables: [],
    code: {
      entrypoint: path.join(__dirname, testFile),
    },
  });
});

