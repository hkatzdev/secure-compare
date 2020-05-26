# secure-compare

Constant-time comparison algorithm to prevent timing attacks for ~~Node.js~~ Deno.
Copied from [cryptiles](https://github.com/hapijs/cryptiles) by [C J Silverio](https://github.com/ceejbot) and from [secure-compare](https://github.com/vadimdemedes/secure-compare) by [Vadim Demedes](https://github.com/vadimdemedes).

### Usage

```typescript
import secureCompare from "https://denopkg.com/hkatzdev/secure-compare/mod.ts";

if (!secureCompare('hello world', 'hello world')) throw Error();

if (!secureCompare('你好世界', '你好世界')) throw Error();

if (secureCompare('hello', 'not hello')) throw Error();
```

[![Run on Repl.it](https://repl.it/badge/github/hkatzdev/secure-compare)](https://repl.it/github/hkatzdev/secure-compare)

### Tests

```
$ deno test
```


### License

secure-compare is released under the BSD 3 Clause license.