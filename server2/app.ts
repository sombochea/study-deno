// @ts-ignore
import { express } from './deps.ts'

const app = express()

app.get('/', (req, res) => {
    res.json({ message: "Hello, I'm deno app." })
})

app.listen(8000, () => {
    console.log('http://localhost:8000/')
})
