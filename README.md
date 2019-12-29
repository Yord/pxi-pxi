![pfx-pfrc teaser][teaser]

`pfx-pfrc` is a sample .pfrc module for `pf`, the fast and extensible command-line data (e.g. JSON) processor and transformer.

See the [`pf` github repository][pf] for more details!

[![node version][node-shield]][node]
[![npm version][npm-shield]][npm-package]
[![license][license-shield]][license]
[![PRs Welcome][prs-shield]][pfx-how-to-contribute]
[![linux unit tests status][linux-unit-tests-shield]][actions]
[![macos unit tests status][macos-unit-tests-shield]][actions]
[![windows unit tests status][windows-unit-tests-shield]][actions]

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

For a much more detailed description, see the [`.pfrc` module documentation][pf-pfrc-module] in the [`pf` repository][pf].

## Reporting Issues

Please report issues [at the `pf` repository][issues]!

## License

`pfx-pfrc` is [MIT licensed][license].

[npm-package]: https://www.npmjs.com/package/@pfx/pfrc
[license]: https://github.com/Yord/pfx-pfrc/blob/master/LICENSE
[teaser]: ./teaser.gif
[pf]: https://github.com/Yord/pf
[actions]: https://github.com/Yord/pfx-pfrc/actions
[npm-shield]: https://img.shields.io/npm/v/@pfx/pfrc.svg?color=orange
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?color=yellow
[unit-tests-shield]: https://github.com/Yord/pfx-pfrc/workflows/unit%20tests/badge.svg?branch=master
[issues]: https://github.com/Yord/pf/issues
[node-shield]: https://img.shields.io/node/v/@pfx/pf?color=red
[node]: https://nodejs.org/
[prs-shield]: https://img.shields.io/badge/PRs-welcome-green.svg
[pfx-how-to-contribute]: https://github.com/Yord/pf
[linux-unit-tests-shield]: https://img.shields.io/github/workflow/status/Yord/pfx-json/linux/master?label=linux&logo=github&color=#5A5A5A&logoColor=#5A5A5A
[macos-unit-tests-shield]: https://img.shields.io/github/workflow/status/Yord/pfx-json/macos/master?label=macos&logo=github&color=#5A5A5A&logoColor=#5A5A5A
[windows-unit-tests-shield]: https://img.shields.io/github/workflow/status/Yord/pfx-json/windows/master?label=windows&logo=github&color=#5A5A5A&logoColor=#5A5A5A
[pf-pfrc-module]: https://github.com/Yord/pf#pfrc-module