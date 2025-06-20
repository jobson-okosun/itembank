import { NoSanitizerPipe } from './no-sanitizer.pipe';

describe('NoSanitizerPipe', () => {
  it('create an instance', () => {
    const pipe = new NoSanitizerPipe();
    expect(pipe).toBeTruthy();
  });
});
