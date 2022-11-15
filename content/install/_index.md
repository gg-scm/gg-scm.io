---
title: Installation
date: 2020-09-09T11:45:00-07:00
lastmod: 2022-11-14T21:16:00-08:00
---

## Prerequisites

You must have a moderately recent copy of Git installed in your `PATH` to
run gg. gg is tested against Git 2.17.1 and newer. Older versions may work, but
are not supported.

## Binaries

The latest release is {{< latestrelease />}}, which was released on
{{< releasedate >}}. Pre-built binaries are available for Linux, Windows,
and macOS.

### Linux

Binary packages are available for all Linux systems via [Nix][]:

```shell
nix-env -iA nixpkgs.gg-scm
```

or a binary can be downloaded
from the {{< latestrelease >}}latest GitHub release{{</ latestrelease >}}
and place it in your `PATH`.

[Nix]: https://nixos.org/

### Windows

Download and run the .msi installer file from the {{< latestrelease >}}latest
GitHub release{{</ latestrelease >}}. Package manager integration is coming
soon.

### macOS

gg can be installed from [Homebrew][]:

```shell
brew install gg-scm/gg/gg
```

or [Nix][]:

```shell
nix-env -iA nixpkgs.gg-scm
```

or a binary can be downloaded
from the {{< latestrelease >}}latest GitHub release{{</ latestrelease >}}
and place it in your `PATH`.

[Homebrew]: https://brew.sh/

## Source

If you are using an operating system that Go and Git support but there isn't a
gg binary available, you can try [building from source][].

[building from source]: https://github.com/gg-scm/gg/blob/main/CONTRIBUTING.md#building-from-source

## What's Next?

After installing gg, the [Working Locally][] guide will show you how to use the
basic commands.

[Working Locally]: {{< relref "workflows/local.md" >}}
