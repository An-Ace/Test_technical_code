export default async function Segitiga (req, res) {
  let str = ""
  const response = req.query.input.split("").map((item, i) => { str = str.concat("0"); return `${item}${str}`})
  res.send({ result: response })
 }