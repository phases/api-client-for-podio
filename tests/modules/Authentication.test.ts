import { test, jest, expect, describe, beforeAll, beforeEach, afterAll } from '@jest/globals';
import Authentication from '../../src/modules/Authentication';
import { HttpResponse } from '../../src/types/http.type';

const TEST_CLIENT_ID = 'some_client_id';
const TEST_CLIENT_SECRET = 'some_secret';
const TEST_APP_ID = 1;
const TEST_APP_TOKEN = 'some_app_secret';
const TEST_AUTH_RESPONSE = {
  access_token: 'some_access_token',
  refresh_token: 'some_refresh_token',
  scope: 'some_scope',
  ref: {},
  token_type: 'bearer',
  expires_in: 100,
};

/**
 * Authentication factory
 *
 * @returns Authentication
 */
function authInstance(): Authentication {
  let appCredentials = {
    client_id: TEST_CLIENT_ID,
    client_secret: TEST_CLIENT_SECRET,
  };

  return new Authentication(appCredentials);
}

describe('Podio auth module test', () => {
  test('Default properties test', () => {
    let auth = authInstance();

    expect(auth).toHaveProperty('appCredentials');
    expect(auth).toHaveProperty('_httpRequest');
    expect(auth).toHaveProperty('appAuth');
    expect(auth).toHaveProperty('passwordAuth');
    expect(auth).toHaveProperty('authenticateWithAuthCode');
    expect(auth).toHaveProperty('authenticateWithRefreshToken');
  });
});

describe('Authentication tests', () => {
  /**
   * Mocking _httpRequest method
   *
   */
  const httpRequestSpyMethod = jest.spyOn(Authentication.prototype, '_httpRequest');
  httpRequestSpyMethod.mockResolvedValue({
    data: TEST_AUTH_RESPONSE,
    status: 200,
    statusText: 'OK',
    headers: {},
    request: {},
    response: {
      data: TEST_AUTH_RESPONSE,
      status: 200,
      statusText: 'OK',
      headers: {},
      request: {},
    },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('App authentication', () => {
    test('http request data assertions', async () => {
      const APP_ID = 1000;
      const APP_TOKEN = 'some_app_secret';

      let auth = authInstance();
      let appAuth = await auth.appAuth(APP_ID, APP_TOKEN);

      let httpRequestData = httpRequestSpyMethod.mock.calls[0][0];

      expect(httpRequestData.grant_type).toBe('app');
      expect(httpRequestData.app_id).toBe(APP_ID);
      expect(httpRequestData.app_token).toBe(APP_TOKEN);
      expect(httpRequestData.client_id).toBe(TEST_CLIENT_ID);
      expect(httpRequestData.client_secret).toBe(TEST_CLIENT_SECRET);

      /**
       * Authentication properties assertions
       */
      authenticationPropertiesAssertions(auth);
    });
  });

  describe('Password authentication', () => {
    test('http request data assertions', async () => {
      const USER_NAME = 'user@email.com';
      const PASSWORD = 'secret';

      let auth = authInstance();
      let appAuth = await auth.passwordAuth(USER_NAME, PASSWORD);

      let httpRequestData = httpRequestSpyMethod.mock.calls[0][0];

      expect(httpRequestData.grant_type).toBe('password');
      expect(httpRequestData.username).toBe(USER_NAME);
      expect(httpRequestData.password).toBe(PASSWORD);
      expect(httpRequestData.client_id).toBe(TEST_CLIENT_ID);
      expect(httpRequestData.client_secret).toBe(TEST_CLIENT_SECRET);

      /**
       * Authentication properties assertions
       */
      authenticationPropertiesAssertions(auth);
    });
  });

  describe('Code(authorization) authentication', () => {
    test('http request data assertions', async () => {
      const CODE = 'CODE123';
      const REDIRECT_URI = 'https://redirect.uri.com';

      let auth = authInstance();
      let appAuth = await auth.authenticateWithAuthCode(CODE, REDIRECT_URI);

      let httpRequestData = httpRequestSpyMethod.mock.calls[0][0];

      expect(httpRequestData.grant_type).toBe('authorization_code');
      expect(httpRequestData.code).toBe(CODE);
      expect(httpRequestData.redirect_uri).toBe(REDIRECT_URI);
      expect(httpRequestData.client_id).toBe(TEST_CLIENT_ID);
      expect(httpRequestData.client_secret).toBe(TEST_CLIENT_SECRET);

      /**
       * Authentication properties assertions
       */
      authenticationPropertiesAssertions(auth);
    });
  });

  describe('Refresh token authentication', () => {
    test('http request data assertions', async () => {
      const REFRESH_TOKEN = 'Refresh token';

      let auth = authInstance();
      let appAuth = await auth.authenticateWithRefreshToken(REFRESH_TOKEN);

      let httpRequestData = httpRequestSpyMethod.mock.calls[0][0];

      expect(httpRequestData.grant_type).toBe('refresh_token');
      expect(httpRequestData.refresh_token).toBe(REFRESH_TOKEN);
      expect(httpRequestData.client_id).toBe(TEST_CLIENT_ID);
      expect(httpRequestData.client_secret).toBe(TEST_CLIENT_SECRET);

      /**
       * Authentication properties assertions
       */
      authenticationPropertiesAssertions(auth);
    });
  });
});

/**
 * Authentication class properties assertions after authentication.
 *
 * @param Authentication auth
 */
function authenticationPropertiesAssertions(auth: Authentication): void {
  let AuthToken = auth.AuthToken();
  let testAuthToken = TEST_AUTH_RESPONSE;

  expect(AuthToken.access_token).toBe(testAuthToken.access_token);
  expect(AuthToken.refresh_token).toBe(testAuthToken.refresh_token);
  expect(AuthToken.scope).toBe(testAuthToken.scope);
  expect(AuthToken.token_type).toBe(testAuthToken.token_type);
  expect(AuthToken.expires_in).toBe(testAuthToken.expires_in);
}
