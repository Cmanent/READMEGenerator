function generateMarkdown(data) {
  console.log("GENERATE", data)
  return `


# My name is:${data.name}

# My github user: ${data.username}

![]( ${data.avatar_url} )

# My license: ${data.license}

# Project Title: ${data.projecttitle}

# Description: ${data.description}

# Table of Contents: ${data.tableofcontents}

# Installation: ${data.installation}

# Usage: ${data.usage}

# License: ${data.license}

# Contributing: ${data.contributing}
`;
}

module.exports = generateMarkdown;



// Project title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing