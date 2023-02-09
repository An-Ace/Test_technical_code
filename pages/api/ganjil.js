export default async function Ganjil (req, res) {
  let hasil = []
  const ganjil = () => {
    for (let index = 1; index <= (parseInt(req.query.input)); index++) {
      if (index % 2 != 0) {
        hasil.push(index)
      }
    }
  }
  ganjil()
  res.send({ result: hasil })
 }