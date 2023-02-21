// function to generate markdown for README
function generateMarkdown(answers) {

  // function with switch statement to give license badge urls
const renderLicenseBadge = license => {
  switch (license) {
      case 'MIT':
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      case 'GNU GPL 3.0':
          return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      case 'Apache 2.0':
          return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      case 'ISC':
          return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      case 'Unlicense':
          return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
          default:
              return '';
  }
}
// set licenseBadge to the url of license chosen
const licenseBadge = renderLicenseBadge(answers.license);
  return `
  
  # ${answers.title}

  ${licenseBadge}

  ## Description

  ${answers.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## License

  This project is licensed under the ${answers.license} license.

  ## Contributing

  ${answers.contributing}

  ## Tests

  ${answers.tests}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.username}](https://github.com/${answers.username}).
`;
}

module.exports = generateMarkdown;
