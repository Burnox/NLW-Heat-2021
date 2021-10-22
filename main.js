const linksSocialMedia = {
  github: 'burnox',
  youtube: '',
  facebook: 'bruno.uchoa.777',
  instagram: 'uchoabruno',
  twitter: 'leite_uchoa'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userGit.href = data.html_url
      userGitLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}

getGithubProfileInfos()
