---
title: "Home"
date: 2018-06-13 08:48:58-07:00
lastmod: 2020-09-09 11:45:00-07:00
---

gg is an alternative command-line interface for [Git][] heavily inspired by
[Mercurial][]. It's designed for less typing in common workflows and make Git
easier to use for both novices and advanced users alike.

[Git]: https://git-scm.com/
[Mercurial]: https://www.mercurial-scm.org/

<!--more-->

-  **Abbreviations.** `git commit -a` takes 13 characters to type. [`gg ci`][]
   takes 5 to do the same thing (don't worry, you can still type `gg commit`).
-  **Built for GitHub and Gerrit.** gg has built-in support for [creating pull
   requests][] and [creating Gerrit changesets][] straight from the
   command-line. No more context switching.
-  **Safer rebases.** [`gg rebase`][] automatically detects common mistakes while
   rebasing and infers the correct change.
-  **Local branches match remote branches.** Using [`gg pull`][] automatically
   creates branches that match your remotes to avoid confusion.
-  **Optional staging.** gg avoids using the staging area to save on typing and
   mistakes. However, gg takes great care to avoid perturbing the staging area,
   so for more advanced commits, you can keep using the same Git commands you're
   used to.
- **Works with existing Git tools.** You can use or not use gg as much as you
  want in your workflow. gg is just a wrapper for the Git CLI, so it works with
  any hooks or custom patches to Git that your project may use. You can see the
  exact Git commands gg runs by passing in `--show-git`.

[creating Gerrit changesets]: {{< relref "workflows/gerrit.md" >}}
[creating pull requests]: {{< relref "workflows/shared.md" >}}
[`gg ci`]: {{< relref "commands/commit.md" >}}
[`gg pull`]: {{< relref "commands/pull.md" >}}
[`gg rebase`]: {{< relref "commands/rebase.md" >}}

## Getting Started

{{< downloadbutton >}}

After installing gg, the [Working Locally][] guide will show you how to use the
basic commands.

[Working Locally]: {{< relref "workflows/local.md" >}}

## Testimonials

-   "I'm not sure if this is amazing or terrifying.  But it's definitely nifty!" -[@rspier][]

[@rspier]: https://github.com/rspier
