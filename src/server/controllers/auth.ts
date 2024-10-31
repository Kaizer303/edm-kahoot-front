import { message } from 'antd'
import axios from 'axios'
import { Request, Response } from 'express'

const authThinknet = async (req: Request, res: Response) => {
  if (!req.query.accessKey) {
    return res.redirect('/th')
  }

  const url = `https://id.thinknet.co.th/user/getToken?format=json&accessKey=${req.query.accessKey}`
  const { data } = await axios.get(url)

  res.cookie('user', data.message.split(',')[0].replace('uid=', ''))

  return res.redirect('/th/home')
}

const authGuest = (req: Request, res: Response) => {
  if (!req.body.username) {
    return res.status(401).json({
      message: 'Unauthenticated',
    })
  }

  res.cookie('user', req.body.username)
  return res.status(200).json({
    message: 'guest login successful',
  })
}

const controller = {
  authThinknet,
  authGuest,
}

export default controller