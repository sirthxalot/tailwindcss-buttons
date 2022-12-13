Contributing to Tailwind CSS Buttons
================================================================================

Introduction
--------------------------------------------------------------------------------

♥ Tailwind CSS Buttons and want to get involved? Thanks! We're actively
looking for folks interested in helping out and there are plenty
of ways you can help!

Please take a moment to review this document to make the contribution 
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect
the time of the developers managing and developing this open-source
project. In return, they should reciprocate that respect in 
addressing your issue or assessing patches and features.

> **Note**  
> You may begin with our [code of conduct] in order to understand some rules of expected behaviour.

Discussions & Support Questions
--------------------------------------------------------------------------------

Please do not use the issue tracker for personal support requests 
or other discussion topics. We use [GitHub Discussion] instead.

Issue Tracking
--------------------------------------------------------------------------------

The [issue tracker] is the preferred channel for bug reports, 
features requests and submitting pull requests, but please 
respect the following restrictions:

- Please **do not** use the issue tracker for personal support requests 
  (use [GitHub Discussion]).

- Please **do not** derail or troll issues. Keep the discussion on topic 
  and respect the opinions of others.

- Please **do not** open issues or pull requests regarding third-party code 
  (open them in their respective repositories).

Compiled Assets
--------------------------------------------------------------------------------

If you are submitting a change that will affect a compiled file, 
such as most of the files in `dist/css` or `dist/js` 
within the repository, do not commit the compiled files. Due to 
their large size, they cannot realistically be reviewed by a 
maintainer. This could be exploited as a way to inject malicious 
code into the software. In order to defensively prevent this, 
all compiled files will be generated and committed by the maintainers.

General Workflow
--------------------------------------------------------------------------------

1. Start a [GitHub Discussion] and tell us about your idea.

2. Open a [new issue][new issue] and fill-in our premade templates.

3. [Fork] the project, clone your fork, and configure the remotes.

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/tailwindcss-buttons.git
   # Navigate to the newly cloned directory
   cd tailwindcss-buttons/
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/sirthxalot/tailwindcss-buttons.git
   ```

   > **Note**  
   > If you cloned a while ago, get the latest changes from upstream:
   > ```bash
   > git checkout main
   > git pull upstream main
   > ```

4. Create a new topic branch to contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

   A few example branch names:
   - feature-xyz
   - patch-xyz
   - refactor-xyz
   - fix-xyz

5. Commit your changes in logical chunks. Please adhere to these 
   [git commit message guidelines] or your code is unlikely being 
   merged into the main project. Use Git's [interactive rebase] 
   feature to tidy up your commits before making them public.

6. Locally merge (or rebase) the upstream development branch into 
   your topic branch:

   ```bash
   git pull [--rebase] upstream main
   ```

7. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

8. Open a [Pull Request] with a clear title and description.     

<!--                            that's all folks!                            -->

[code of conduct]: https://github.com/sirthxalot/tailwindcss-buttons/blob/main/.github/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct
[github discussion]: https://github.com/sirthxalot/tailwindcss-buttons/discussions/
[issue tracker]: https://github.com/sirthxalot/tailwindcss-buttons/issues/
[new issue]: https://github.com/sirthxalot/tailwindcss-buttons/issues/new/choose/

[fork]: https://docs.github.com/de/get-started/quickstart/fork-a-repo
[git commit message guidelines]: https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
[interactive rebase]: https://help.github.com/articles/about-git-rebase/
[pull request]: https://help.github.com/articles/using-pull-requests/
[psr-2]: https://github.com/php-fig/fig-standards/blob/master/accepted/psr-2-coding-style-guide.md
[psr-4]: https://github.com/php-fig/fig-standards/blob/master/accepted/psr-4-autoloader.md

[styleci]: https://styleci.io
[laravel's best practices by alexeymezenin]: https://github.com/alexeymezenin/laravel-best-practices#contents
[markdown syntax]: https://vuepress.vuejs.org/guide/markdown.html
[vuepress]: https://vuepress.vuejs.org/
[node.js]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[build-in server]: https://vuepress.vuejs.org/guide/#how-it-works
[phpunit]: https://phpunit.de/
[phpunit doc]: https://phpunit.de/documentation.html
[testbench]: https://packages.tools/testbench/getting-started/introduction.html
[composer]: https://getcomposer.org
[phpunit doc config]: https://phpunit.readthedocs.io/en/9.5/configuration.html
[phpunit doc test cases]: https://phpunit.readthedocs.io/en/9.5/writing-tests-for-phpunit.html
[editorconfig]: https://editorconfig.org/
