import { expect, jest, test } from '@jest/globals';
import axios from 'axios';
import HttpClient from '../../src/http/HttpClient';
import { SimpleObject } from '../../src/types/basic.type';
import { HttpRequest } from '../../src/types/http.type';

jest.mock('axios', () => jest.fn());
const mockedAxios = axios as jest.Mocked<typeof axios>;
const BASE_URL = 'https://api.podio.com';

test('http-client class properties test', () => {
  let client = new HttpClient({ method: 'get', url: '/', headers: {} });

  expect(client).toHaveProperty('base_url');
  expect(client).toHaveProperty('call');
  expect(client.base_url).toBe(BASE_URL);
});

test('call() function test', async () => {
  mockedAxios.mockResolvedValue({});

  let requestData: HttpRequest = {
    url: '/',
    method: 'post',
    data: '',
    headers: {
      Authorization: 'OAuth2 sample_token',
    },
  };

  let request = await new HttpClient(requestData).call();
  let mockedRequestParameters = mockedAxios.mock.calls[0][0] as any as SimpleObject;

  expect(mockedRequestParameters.url).toBe(requestData.url);
  expect(mockedRequestParameters.method).toBe(requestData.method);
  expect(mockedRequestParameters.data).toBe(requestData.data);
  expect(mockedRequestParameters.headers).toBe(requestData.headers);
  expect(mockedRequestParameters.baseURL).toBe(BASE_URL);
});
