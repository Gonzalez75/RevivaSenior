import { db } from "../db.js"

export const getIdosos = (req, res) => {
    const q = "SELECT * FROM idosos"

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}
