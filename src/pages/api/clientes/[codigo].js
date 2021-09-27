export default function handler(req, res) {

    const codigo = req.query.codigo

    res.status(200).json({
        id: codigo,
        nome: `Clayton ${codigo}`,
        idade: `30 ${codigo}`
    })
}