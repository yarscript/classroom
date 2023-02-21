// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { name: 'One' },
    { name: 'Two' },
    { name: 'Tree' },
    { name: 'Four' },
    { name: 'Five' }
  ])
}
