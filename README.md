**NOTE: THIS WEBPAGE IS NO LONGER LIVE, and this repository is deprecated.**

Webpage sources for gcos.ai, the Webpage of GC.OS.

Used by members of GC.OS and supported open source projects primarily,
but generally sensible contributions are appreciated.

### One-time developer set-up

To develop locally:

1. ensure Ruby and `bundler` package manager are installed.

    * to install Ruby, see the [official Ruby install guide](https://www.ruby-lang.org/en/documentation/installation/)
    * to install `bundler`, type `gem install bundler` on a command line after Ruby is installed

2. install the required dependencies by executing `bundle install` from a console, in the repository root.

### Local webpage build

To view the local webpage build, type

`bundle exec jekyll serve`

from a console, in the repository root.

The webpage can be viewed in any browser at `http://localhost:4000`,
and will change with any edits to (non-core) project files, such as html, css, md.
