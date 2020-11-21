// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}

  ## Username
  ${data.username}

  ## Description
  ${data.description}

  ## Contributors
  ${data.contributors}

  ## Technologies
  ${data.technologies}

  ## License
  ${data.license}

  ## *For Questions*
  contact:

  Github:[${data.Username}](https://github.com/fgutierrez2191)
`;
}

module.exports = generateMarkdown;
