import appConfig from './config';

describe('App Config', () => {
  it('should return the app config', () => {
    expect(appConfig).toEqual({
      appName: 'Omni',
      eventEmitterDebug: expect.any(Boolean),
      reactotron: expect.any(Boolean),
    });
  });
});
