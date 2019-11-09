/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
// const httpFetch = fetch, storage = localStorage;

/**
 * ItarjApi is a generic REST Api handler. Set your API base url (`e.g /api/v1`) first.
 *
 * Sample initialization
 * `const api = new ItarjApi('/api/v1');`
 *
 * Sample Usage
 * `api.Get('/comments/fdbd468a-2976-4f2f-8fe0-ae12dd8d5101').then(console.log).catch(console.error)`
 *
 * The `ItarjApi` helper exposes 4 methods `Get` `Post` `Delete` `Patch` and `Put`
 * Each of the above method returns a `Promise` that resolves to `{ message: string, data: any }`
 * The methods also extends the default error constructor in the format `{ message: string, data: any }`
 * where `data` is extra error information returned from the server-side.
 * @param {string} apiBase base URL for API
 */
function ItarjApi(apiBase) {
  const headers = {}; // define header object
  const e = new Error(); // define error object
  const acceptedMethods = 'GET POST PUT PATCH DELETE';

  if (apiBase.endsWith('/')) {
    e.message = 'API base url must not end with a slash (/)';
    throw e;
  }
  const url = apiBase;

  /**
   * @private
   * @param {string} method HTTP method. Any one of `GET` `POST` `PUT` `PATCH` or `DELETE`
   * @param {string} endpoint the endpoint to `GET` excluding slash (`/`)
   * @param {boolean} includeToken specify if this endpoints is `JWT` protected
   * @returns {Promise<{ message: string, data }>}
   *  */
  const _fetch = (
    method, endpoint, body, includeToken = false
  ) => (
    new Promise((resolve, reject) => {
      if (endpoint.startsWith('/')) {
        e.message = 'Endpoint cannot start with a slash. Consider taking out the slash.';
        return reject(e);
      }

      if (!acceptedMethods.includes(method)) {
        e.message = `The '${method}' method you supplied is not accepted.`;
        return reject(e);
      }

      if (body) {
        headers.Accept = 'application/json';
        headers['Content-Type'] = 'application/json';
      }

      // if (includeToken) {
      //   headers.Authorization = localStorage.getItem('token'); // assign the auth header
      // }

      /* Same if statement repeated again?
      if (body) {
        headers.Accept = 'application/json';
        headers['Content-Type'] = 'application/json';
      }
      */

      return fetch(`${url}/${endpoint}`, {
        headers,
        method,
        body: method !== 'GET' ? body : undefined
      })
        .then(async res => {
          // console.log(res);
          if (!res.ok) {
            e.message = `It seems there's a problem with your request.\n\nRequest URL: ${url}/${endpoint}.\n\nKindly check it or ensure you have an internet connection.`;
            e.data = await res.json(); // add API response data (if available)
            throw e; // send readable error message to client
          }
          return res.json();
        }).then(data => {
          if (!data.success) {
            e.message = data.message;
            e.data = data.payload;
            throw e; // send readable error message to client
          }

          return resolve({
            message: data.message,
            data: data.payload
          });
        })
        .catch(err => { // handle exception
          // console.log(err);
          reject(err);
        });
    })
  );

  /**
   * @param {string} endpoint the endpoint to `GET` excluding slash (`/`)
   * @param {boolean} includeToken specify if this endpoints is `JWT` protected
   * @returns {Promise<{ message: string, data }>}
   *  */
  const Get = (endpoint, includeToken = false) => _fetch(
    'GET', endpoint, null, includeToken
  );

  /**
   * @param {string} endpoint the endpoint to `POST` excluding slash (`/`)
   * @param {object} body JSON object or Form Data to send alongside the request
   * @param {boolean} includeToken specify if this endpoints is `JWT` protected
   * @returns {Promise<{ message: string, data }>}
   *  */
  const Post = (endpoint, body, includeToken = false) => _fetch(
    'POST', endpoint, body, includeToken
  );

  /**
   * @param {string} endpoint the endpoint to `PUT` excluding slash (`/`)
   * @param {object} body JSON object or Form Data to send alongside the request
   * @param {boolean} includeToken specify if this endpoints is `JWT` protected
   * @returns {Promise<{ message: string, data }>}
   *  */
  const Put = (endpoint, body, includeToken = false) => _fetch(
    'PUT', endpoint, body, includeToken
  );

  /**
   * @param {string} endpoint the endpoint to `PATCH` excluding slash (`/`)
   * @param {object} body JSON object or Form Data to send alongside the request
   * @param {boolean} includeToken specify if this endpoints is `JWT` protected
   * @returns {Promise<{ message: string, data }>}
   *  */
  const Patch = (endpoint, body, includeToken = false) => _fetch(
    'PATCH', endpoint, body, includeToken
  );

  /**
   * @param {string} endpoint the endpoint to `DELETE` excluding slash (`/`)
   * @param {boolean} includeToken specify if this endpoints is `JWT` protected
   * @returns {Promise<{ message: string, data }>}
   *  */
  const Delete = (endpoint, includeToken = false) => _fetch(
    'DELETE', endpoint, null, includeToken
  );

  return {
    Get,
    Post,
    Put,
    Patch,
    Delete
  };
}

console.log(`${ItarjApi.name} loaded`);
