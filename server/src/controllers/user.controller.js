import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'

export const loginUser = async (req, res) => {
    const { name, password } = req.body
    try {
        const existUser = await User.findOne({ name })
        if (!existUser) return res.status(400).send('El nombre ingresado no existe en nuestro sistema')

        if (password !== existUser.password) return res.status(400).json({ message: 'Contraseña incorrecta' })

        const token = jwt.sign({ id: existUser.id }, 'mya1234', { expiresIn: "1d" })

        res.status(200).json({
            token,
            message: "Inicio de sesión exitoso",
            user: existUser
        })
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).send("Se produjo un error en el servidor")
    }
}

export const logout = async (req, res) => {
    res.status(200).json({ message: "Cierre de sesion exitoso" })
}