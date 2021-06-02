// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache': return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD': return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'IBM': return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'MIT': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla': return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    default: return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license)
  return `# ${data.title}
  ${badge}

  Table of Contents |
  ----------------- |
  [Description](#description) |
  [Installation](#installation) |
  [Usage](#usage) |
  [License](#license) |
  [Contributing](#contributing) |
  [Tests](#tests) |
  [Questions](#questions) |

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is licensed under ${data.license} open-source licensing.

  ## Contributing
  Contributors: ${data.contribution}

  To contribute please contact us at the email below.  You may also fork this repository and create your own branch to test features.  If you are looking to contribute to our branch directly, please submit an issue or a pull request from a forked branch with detailed information as to suggested changes.  Thank you!

  ## Tests
  ${data.tests}

  ## Questions
  Check out my [GitHub profile](https://github.com/${data.username})
  or contact me by email at:
  [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;
