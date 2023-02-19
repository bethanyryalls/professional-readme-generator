// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
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
