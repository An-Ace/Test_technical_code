export default async function Prima (req, res) {
  let hasil = []
  const ganjil = () => {
    for (let i = 1; i <= (parseInt(req.query.input)); i++) {
      var kenaBagi = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          kenaBagi++
        }
      }
      if (kenaBagi == 2) {
        hasil.push(i)
      }
    }
  }
  ganjil()
  res.send({ result: hasil })
 }