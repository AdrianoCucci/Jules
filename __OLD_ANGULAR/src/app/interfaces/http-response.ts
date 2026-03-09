/**
 * A structure for containing information about HTTP responses, such as any data, errors, and status codes returned.
 * @param T An object to typecast any returned data as.
 */
export interface HttpResponse<T> {
  /**
   * Any data returned from the response, if applicable.
   */
  data?: T;

  /**
   * An error message created if the response was evaluated as unsuccessful.
   */
  error?: string;

  /**
   * The HTTP status code of the response.
   * 1XX = Informational.
   * 2XX = Successful.
   * 3XX = Redirection.
   * 4XX = Client-side error.
   * 5XX = Server-side error.
   */
  statusCode: number;
}
