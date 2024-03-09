import 'react-native';

describe('submodules', () => {

  it('should import submodules correctly', () => {
    const submodules = require('./submodules').default;

    expect(submodules.length).toBeGreaterThan(0);
  });
});
