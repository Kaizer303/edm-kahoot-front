import axios from 'axios'
import { Request, Response } from 'express'

const authThinknet = async (req: Request, res: Response) => {
  if (!req.query.accessKey) {
    return res.redirect('/th')
  }

  const url = `https://id.thinknet.co.th/user/getToken?format=json&accessKey=${req.query.accessKey}`
  const { data } = await axios.get(url)

  res.cookie('user', data.message.split(',')[0].replace('uid=', ''))

  return res.redirect('/th')
}

const controller = {
  authThinknet,
}

export default controller