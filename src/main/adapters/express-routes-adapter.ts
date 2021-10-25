import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }

    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.statusCode > 399) {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }

    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
