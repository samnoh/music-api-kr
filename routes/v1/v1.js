import express from 'express'
import * as API from './api'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ code: 200, v: 'v1', status: 'OK' })
})

router.get('/melon/music/chart/100', API.getMelonTop100)
router.get('/melon/music/chart/100/exo', API.getMelonTop100Exo)

router.get('/genie/music/chart/200', API.getGenieTop200)
router.get('/genie/music/chart/200/exo', API.getGenieTop200Exo)

router.get('/bugs/music/chart/100', API.getBugsTop100)
router.get('/bugs/music/chart/100/exo', API.getBugsTop100Exo)

router.get('/naver/music/chart/100', API.getNaverTop100)
router.get('/naver/music/chart/100/exo', API.getNaverTop100Exo)

export default router
