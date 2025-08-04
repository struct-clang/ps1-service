export default function handler(req, res) {
  const options = [
    '\\[\\e[32m\\]\\u@\\h:\\w\\$ ',
    '\\[\\e[31m\\]\\u@\\h:\\w\\$ ',
    '\\[\\e[34m\\]\\u@\\h:\\w\\$ ',
    '\\[\\e[33m\\]\\u@\\h:\\w\\$ ',
  ]
  const ps1 = options[Math.floor(Math.random() * options.length)]
  res.status(200).send(ps1)
}
