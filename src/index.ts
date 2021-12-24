import app from './server/BackendApp'
import { PORT, HOST } from './constants'

app.listen(PORT, () => {
  console.log(`🚀 server started at http://${HOST}:${PORT}`)
})
