import express from 'express'
import * as API from './api'

const router = express.Router()

router.get('/', function (req, res) {
    res.json({ code: 200, v: 'v1', status: 'OK' })
})

router.get('/melon/music/chart/100', function (req, res) {
    API.getMelonTop100(req, res)
})

router.get('/melon/music/chart/100/exo', function (req, res) {
    API.getMelonTop100Exo(req, res)
})

router.get('/genie/music/chart/200', function (req, res) {
    API.getGenieTop200(req, res)
})

router.get('/genie/music/chart/200/exo', function (req, res) {
    API.getGenieTop200Exo(req, res)
})

router.get('/bugs/music/chart/100', function (req, res) {
    API.getBugsTop100(req, res)
})

router.get('/bugs/music/chart/100/exo', function (req, res) {
    API.getBugsTop100Exo(req, res)
})

router.get('/naver/music/chart/100', function (req, res) {
    API.getNaverTop100(req, res)
})

router.get('/naver/music/chart/100/exo', function (req, res) {
    API.getNaverTop100Exo(req, res)
})

export default router
