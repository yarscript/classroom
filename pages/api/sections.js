// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: 0, name: 'Lesson Information', title: 'wordlist' },
    { id: 1, name: 'Warm up', title: '' },
    { id: 2, name: 'Vocabulary clothes', title: '' },
    { id: 3, name: 'Video listening', title: '' },
    { id: 4, name: 'After watching', title: '' },
    { id: 5, name: 'Wrap up', title: '' },
    { id: 6, name: 'Extra practice', title: '' },
    { id: 7, name: 'Finish this unit', title: '' }
  ])
}
