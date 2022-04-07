export function changeUser(user, repos, stars) {
  return{
    type: 'CHANGE_USERDATA',
    user,
    repos,
    stars
  }
}