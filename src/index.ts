import app from './server/BackendApp'
import { PORT, HOST } from './constants'

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 server started at http://${HOST}:${PORT}`)
})
