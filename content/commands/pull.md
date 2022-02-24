{
    "cmd_aliases": [],
    "cmd_class": "basic",
    "date": "2018-07-06 22:13:11-07:00",
    "lastmod": "2022-02-24 14:33:06-08:00",
    "title": "gg pull",
    "usage": "gg pull [-u] [-r REV [...]] [SOURCE]"
}

pull changes from the specified source

<!--more-->

If no source repository is given, the remote called `origin` is used.
If the source repository is not a named remote, then the branches will be
saved under `refs/ggpull/`.

Local branches with the same name as a remote branch will be
fast-forwarded if possible. The currently checked out branch will not be
fast-forwarded unless `-u` is passed. If a branch is removed from
all known remotes and the local branch points to the last-known commit for
that branch, then it will be moved under `refs/gg-old/`.

If no revisions are specified, then all the remote's branches and tags
will be fetched. If the source is a named remote, then its remote
tracking branches will be pruned.

## Options

<dl class="flag_list">
	<dt>-r ref</dt>
	<dd>refs to pull</dd>
	<dt>-force-tags</dt>
	<dd>update any tags pulled</dd>
	<dt>-u</dt>
	<dd>update to new head if new descendants were pulled</dd>
</dl>
