import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import http from 'http'
import createError from 'http-errors'
import logger from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import v1 from './routes/v1/v1'

const app = express()

app.set('port', process.env.PORT || 5000)

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})

app.use(logger('dev'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())

app.use('/v1', v1)

app.use(function (req, res, next) {
  // next(createError(404))
  next(
    res.json({
      code: 404,
      v: 'v1',
      status: 'ERR_NOTFOUND'
    })
  )
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  // res.render('error')
  res.json({
    code: 500,
    v: 'v1',
    status: 'ERR_SERVER'
  })
})
