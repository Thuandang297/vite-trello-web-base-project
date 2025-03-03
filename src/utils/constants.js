// export const API_ROOT = 'http://localhost:8017'
// export const API_ROOT = 'https://trello-api-app.onrender.com'
// export const API_WS_ROOT = 'https://trello-api-app.onrender.com'
const apiRoot = () => {
  if (process.env.BUILD_MODE === 'development') {
    return 'http://localhost:8017'
  }
  else if (process.env.BUILD_MODE === 'production') {
    return 'https://trello-api-app.onrender.com'
  }
}

export const API_ROOT = apiRoot()