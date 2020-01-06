![pfx-pfrc teaser][teaser]

`pfx-pfrc` is a sample .pfrc module for `pf`, the fast and extensible command-line data (e.g. JSON) processor and transformer.

See the [`pf` github repository][pf] for more details!

[![node version][shield-node]][node]
[![npm version][shield-npm]][npm-package]
[![license][shield-license]][license]
[![PRs Welcome][shield-prs]][contribute]
[![linux unit tests status][shield-unit-tests-linux]][actions]
[![macos unit tests status][shield-unit-tests-macos]][actions]
[![windows unit tests status][shield-unit-tests-windows]][actions]

## Installation

`pfx-pfrc` must be cloned to your user folder as follows:

```bash
$ git clone https://github.com/Yord/pfx-pfrc.git ~/.pfrc
```

After cloning the module, install its dependencies:

```bash
$ cd ~/.pfrc
$ npm install
```

For a much more detailed description, see the [`.pfrc` module documentation][pfrc-module].

## Reporting Issues

Please report issues [in the tracker][issues]!

## License

`pfx-pfrc` is [MIT licensed][license].

[actions]: https://github.com/Yord/pfx-pfrc/actions
[contribute]: https://github.com/Yord/pf
[issues]: https://github.com/Yord/pf/issues
[license]: https://github.com/Yord/pfx-pfrc/blob/master/LICENSE
[node]: https://nodejs.org/
[npm-package]: https://www.npmjs.com/package/@pfx/pfrc
[pf]: https://github.com/Yord/pf
[pfrc-module]: https://github.com/Yord/pf#pfrc-module
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg?color=yellow&labelColor=313A42
[shield-node]: https://img.shields.io/node/v/@pfx/pf?color=red&labelColor=313A42
[shield-npm]: https://img.shields.io/npm/v/@pfx/pfrc.svg?color=orange&labelColor=313A42
[shield-prs]: https://img.shields.io/badge/PRs-welcome-green.svg?labelColor=313A42
[shield-unit-tests-linux]: https://github.com/Yord/pfx-pfrc/workflows/linux/badge.svg?branch=master
[shield-unit-tests-macos]: https://github.com/Yord/pfx-pfrc/workflows/macos/badge.svg?branch=master
[shield-unit-tests-windows]: https://github.com/Yord/pfx-pfrc/workflows/windows/badge.svg?branch=master
[teaser]: ./teaser.gif