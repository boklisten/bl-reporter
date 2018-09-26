import { BlCommonModule } from './bl-common.module';

describe('BlCommonModule', () => {
  let blCommonModule: BlCommonModule;

  beforeEach(() => {
    blCommonModule = new BlCommonModule();
  });

  it('should create an instance', () => {
    expect(blCommonModule).toBeTruthy();
  });
});
