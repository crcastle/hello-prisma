import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({status: 'ok'})
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    }
  })
  
  res.json(users)
})

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})