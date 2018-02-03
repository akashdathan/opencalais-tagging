/*------------------------------------------------------------------------------
   About      : Utility Functions
   
   Created on : Thu Jan 11 2018
   Author     : Akash Dathan
------------------------------------------------------------------------------*/

import * as https                                 from 'https'
import * as zlib                                  from 'zlib'
import * as Types                                 from './types'


export async function executeHttps(urlObj: any, inputData : string): Promise<string> {

  return await new Promise<string>((resolve, reject) => {
    const req = https.request(urlObj, (outputStream: any) => {

      switch (outputStream.headers['content-encoding']) {
        case 'gzip':
          outputStream = outputStream.pipe(zlib.createGunzip())
          break
        case 'deflate':
          outputStream = outputStream.pipe(zlib.createInflate())
          break
      }

      let response = ''
      outputStream.on('data', (chunk: any) => {
        response += chunk
      })
      outputStream.on('end', () => {
        return resolve(response)
      })
      outputStream.on('error', (err: any) => {
        return reject(response)
      })
    })
    
    req.on('error', (err: any) => {
      return reject(err)
    })

    if(inputData) req.write(inputData)

    req.end()
  })
}

export function getCalaisOptions(headers : any) {
  return {
    "host"    : "api.thomsonreuters.com",
    "port"    : "443",
    "path"    : "/permid/calais",
    "method"  : "POST",
    "headers" : headers
  }
}