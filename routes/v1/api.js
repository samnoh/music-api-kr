// var mysql_dbc = require('../../config/db_con')()
// var connection = mysql_dbc.init()
import async from 'async'
import * as MELON from '../util/melon/music'
import * as GENIE from '../util/genie/music'
import * as BUGS from '../util/bugs/music'
import * as NAVER from '../util/naver/music'

export const getMelonTop100 = function (req, res) {
  MELON.getData()
    .then(result => {
      res.json(result)
    })
}

export const getMelonTop100Exo = function (req, res) {
  MELON.getDataExo()
    .then(result => {
      res.json(result)
    })
}

export const getGenieTop200 = function (req, res) {
  GENIE.getData()
    .then(result => {
      res.json(result)
    })
}

export const getGenieTop200Exo = function (req, res) {
  GENIE.getDataExo()
    .then(result => {
      res.json(result)
    })
}

export const getBugsTop100 = function (req, res) {
  BUGS.getData()
    .then(result => {
      res.json(result)
    })
}

export const getBugsTop100Exo = function (req, res) {
  BUGS.getDataExo()
    .then(result => {
      res.json(result)
    })
}

export const getNaverTop100 = function (req, res) {
  NAVER.getData()
    .then(result => {
      res.json(result)
    })
}

export const getNaverTop100Exo = function (req, res) {
  NAVER.getDataExo()
    .then(result => {
      res.json(result)
    })
}

