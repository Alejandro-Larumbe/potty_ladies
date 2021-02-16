export class HttpException extends Error {
  status: number
  message: string
  errors: string[]
  title: string
    constructor(status: number, message: string, errors: string[], title: string) {
      super(message)
      this.status = status
      this.message = message
      this.errors = errors
      this.title = title
    }
}
