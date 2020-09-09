---
title: Installation
date: 2020-09-09T11:45:00-07:00
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

Binary packages are available for Debian-based systems, including Ubuntu.
To use the APT repository, run:

```shell
# Import the gg public key
curl -fsSL https://gg-scm.io/apt-key.gpg | sudo apt-key --keyring /etc/apt/trusted.gpg.d/gg.gpg add -

# Add the gg APT repository to the list of sources
echo "deb [signed-by=/etc/apt/trusted.gpg.d/gg.gpg] https://apt.gg-scm.io gg main" | sudo tee /etc/apt/sources.list.d/gg.list
echo "deb-src [signed-by=/etc/apt/trusted.gpg.d/gg.gpg] https://apt.gg-scm.io gg main" | sudo tee -a /etc/apt/sources.list.d/gg.list

# Update the package list and install gg
sudo apt-get update && sudo apt-get install gg
```

For other distributions, download the Linux binary in the
{{< latestrelease >}}latest GitHub release{{</ latestrelease >}} and place it
in your `PATH`.

### Windows

Download and run the .msi installer file from the {{< latestrelease >}}latest
GitHub release{{</ latestrelease >}}. Package manager integration is coming
soon.

### macOS

gg can be installed from [Homebrew][]:

```shell
brew install gg-scm/gg/gg
```

or a binary can be downloaded from the {{< latestrelease >}}latest GitHub
release{{</ latestrelease >}} and placed in your `PATH`.

[Homebrew]: https://brew.sh/

## Source

If you are using an operating system that Go and Git support but there isn't a
gg binary available, you can try [building from source][].

[building from source]: https://github.com/gg-scm/gg/blob/main/CONTRIBUTING.md#building-from-source

## What's Next?

After installing gg, the [Working Locally][] guide will show you how to use the
basic commands.

[Working Locally]: {{< relref "workflows/local.md" >}}
