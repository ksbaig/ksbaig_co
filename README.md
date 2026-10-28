# KsbaigCo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publish to GitHub Pages

This existing website uses Angular 17.3, not Angular 21. The deployment
workflow uses Node.js 22, matching the locally verified production build.
It publishes only the static frontend; GitHub Pages cannot run a backend
or database. Never commit credentials or confidential datasets.

The confirmed destination is `https://github.com/ksbaig/ksbaig_co`.
Create an empty **public** repository named `ksbaig_co` in that account.
Do not initialize it with a README, license, or gitignore.

From PowerShell in this project folder, review the files before publishing:

```powershell
Set-Location D:\KSBaig_Solution\Ksbaig_co\ksbaig_co
git status
git diff
git diff --cached
```

If Git has no author identity configured, set it for this repository before
committing. Replace the placeholders with your name and your verified GitHub
email or the exact no-reply address from GitHub Settings > Emails:

```powershell
git config user.name "YOUR NAME"
git config user.email "YOUR GITHUB EMAIL"
```

The current repository has no commits or remotes. After reviewing the files,
publish it with:

```powershell
git add .
git commit -m "Prepare KSB Solutions website for GitHub Pages" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
git branch -M main
git remote add origin https://github.com/ksbaig/ksbaig_co.git
git push -u origin main
```

Sign in as `ksbaig` when Git requests authentication. Never put a token in
the remote URL. If `origin` has since been added, inspect `git remote -v`
instead of adding or replacing it. Do not force-push if GitHub already
contains commits.

In the GitHub repository, open **Settings > Pages > Build and deployment**
and select **GitHub Actions** as the source. Then open **Actions > Deploy
KSB Solutions to GitHub Pages**. If the first run failed before Pages was
enabled, rerun it or use **Run workflow** on `main`.

The workflow runs this production build:

```powershell
npm run build -- --configuration production --base-href /ksbaig_co/
```

The verified browser output is `dist\ksbaig_co\browser`. The workflow
independently discovers the directory containing the built `index.html`
and fails if the result is missing or ambiguous.
The development server still uses `/`; the deployment base path is only
applied by the production build command.

Expected website URL (not live until deployment succeeds):
`https://ksbaig.github.io/ksbaig_co/`.

After a successful deployment, check HTTPS, desktop/mobile navigation,
dropdowns, all slideshow images, CSS, JavaScript, and fonts. Refresh the
page and check browser developer tools for failed requests. Current
navigation uses same-page anchors and the Angular routes list is empty,
so no `404.html` fallback is required. If client-side routes are added,
revisit routing for Pages before publishing them.

Future updates:

```powershell
git status
git add .
git commit -m "Update KSB Solutions website"
git push
```

Each push to `main` rebuilds and redeploys the site. Review staged files
before every commit; ignore rules cannot protect secrets in tracked files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
