// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}

  ## Username
  ${data.username}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Contributors
  ${data.contributors}

  ## Technologies
  ${data.technologies}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## *For Questions*
  contact:

  Github:[${data.Username}](https://github.com/fgutierrez2191)
`;
}

module.exports = generateMarkdown;
