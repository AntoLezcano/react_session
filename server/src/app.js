import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { ConexionMDB } from './db/datebasa.js'
import router from './routes/user.router.js'
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//base de datos
ConexionMDB()

//rutas
app.use(router)

app.listen(4000, console.log("Servidor corriendo en el puerto 4000"))