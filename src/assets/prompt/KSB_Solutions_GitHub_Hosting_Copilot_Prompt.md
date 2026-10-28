# GitHub Hosting Prompt for VS Code GitHub Copilot

## KSB Solutions --- Angular 21 Website

**Purpose:** Use this prompt in GitHub Copilot Chat/Agent mode inside my
existing VS Code project. Inspect the actual project first, then prepare
and deploy the website to GitHub Pages safely.

### My current project

-   Website: **KSB Solutions --- Geospatial Intelligence**
-   Framework: **Angular 21**
-   Local development URL: `http://localhost:4200/`
-   Windows project folder shown in VS Code:
    `D:\KSBaig_Solution\Ksbaig_co\ksbaig_co`
-   Existing source files include `angular.json`, `package.json`,
    `package-lock.json`, `src/`, and `public`/assets as applicable.
-   I already have a GitHub account and GitHub Copilot.
-   Suggested repository name: `ksbaig_co`
-   Suggested live URL if my GitHub username is `ksbaig`:
    `https://ksbaig.github.io/ksbaig_co/`
-   **Important:** Verify my real GitHub username and existing Git
    remote before using either value. Do not assume the suggested
    username or URL is correct.

------------------------------------------------------------------------

## Prompt to give GitHub Copilot

Act as a senior Angular 21 and GitHub Pages deployment engineer. Help me
publish my existing KSB Solutions website from this VS Code workspace to
GitHub Pages using GitHub Actions.

### 1. Inspect before changing anything

1.  Confirm the current workspace root by locating `angular.json` and
    `package.json`.
2.  Inspect `package.json`, `angular.json`, the Angular version, the
    build configuration, the output path, routing setup, and the
    existing Git status/remotes.
3.  Do not recreate the Angular project or overwrite my existing
    website.
4.  Do not delete or replace my existing components, styling, images,
    slides, or assets.
5.  Do not commit `node_modules`, build output, secrets, API keys,
    private datasets, or environment files containing credentials.
6.  If Git is already initialized, preserve it. If an `origin` remote
    already exists, inspect it and do not overwrite it without asking
    me.
7.  If a required detail such as GitHub username/repository is unknown,
    tell me exactly what to check rather than inventing it.

### 2. Check the website locally

-   Keep the current website working at `http://localhost:4200/`.
-   Check the existing Angular build command and run the production
    build.
-   Fix only deployment-related issues that are necessary.
-   Preserve the KSB Solutions branding, responsive layout, dropdown
    menus, hero image, and current page content.
-   Report any build errors and explain how to fix them.

### 3. Configure the correct GitHub Pages base path

This is a **project site**, not a user/organization root site, if the
repository is named `ksbaig_co`.

-   Use `/ksbaig_co/` as the base href only after confirming that this
    is the repository name.
-   Build with the equivalent of:

``` powershell
npx ng build --configuration production --base-href /ksbaig_co/
```

-   Inspect `angular.json` to confirm where Angular 21 actually writes
    its browser files. Do not hard-code an assumed `dist/.../browser`
    path.
-   Verify that the final deploy folder contains `index.html` and all
    required JS, CSS, and assets.
-   Check that image and asset URLs work under `/ksbaig_co/`, not only
    at `/`.
-   If the repository has a different name, update the base href and
    workflow path to match it.

### 4. Create a GitHub Actions deployment workflow

Create `.github/workflows/deploy.yml` in the workspace if it does not
already exist. If a workflow exists, inspect and update it rather than
creating a duplicate.

Use a GitHub Pages Actions workflow that:

1.  Runs on pushes to the repository's actual default deployment branch
    (use `main` unless the repository uses another branch) and supports
    manual `workflow_dispatch`.
2.  Checks out the repository.
3.  Sets up a Node.js version compatible with this project's Angular 21
    version and `package-lock.json`.
4.  Installs reproducible dependencies with `npm ci`.
5.  Builds Angular in production mode with the correct base href.
6.  Detects the real browser output directory from the build output.
7.  Fails with a helpful error if `index.html` cannot be found.
8.  Uploads only the built static website files as a Pages artifact.
9.  Uses the supported GitHub Pages deployment actions and the minimum
    permissions required, including `pages: write` and `id-token: write`
    for deployment.
10. Does not attempt to run a server-side .NET API or database on GitHub
    Pages.

Use maintained, compatible official GitHub Actions versions. Ensure the
workflow syntax is valid YAML. Do not guess the Angular output path.

### 5. Handle Angular routing and refreshes

Inspect `src/app/app.routes.ts` and determine whether the site uses
Angular client-side routes.

-   If it is a single-page app with client-side routes, configure a
    GitHub Pages-compatible fallback so refreshing a nested route does
    not produce a 404.
-   If using the common `404.html` fallback approach, copy the built
    `index.html` to `404.html` in the **deployment artifact**, without
    changing the source application's `index.html`.
-   Explain any limitations of this fallback and verify links, images,
    and routes under the repository subpath.

### 6. Check Git safety and prepare the repository

-   Inspect `.gitignore` and make sure `node_modules/`, Angular build
    output, logs, local environment files, and secrets are excluded.
-   Do not expose API keys, tokens, passwords, private GIS services, or
    confidential data in a public repository.
-   Show me the results of `git status` before committing.
-   Do not force-push, delete branches, or overwrite remote history.
-   If no Git repository exists, initialize it only after confirming the
    workspace root.
-   If no `origin` exists, show me the exact remote URL format and ask
    me to confirm my GitHub username and repository before adding it.
-   Never put a personal access token into a Git remote URL or source
    file.

### 7. Give me the exact commands to publish

After preparing the files, provide the commands appropriate to my
current Git state. For a new repository with no existing remote history,
the typical sequence is:

``` powershell
git status
git add .
git commit -m "Prepare KSB Solutions website for GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ksbaig_co.git
git push -u origin main
```

Replace `YOUR-USERNAME` with my confirmed GitHub username. Do **not**
run `git remote add origin` if `origin` already exists. If the
repository is already connected or has existing commits, adapt the
commands safely instead of blindly repeating this sequence.

If Git says there is nothing to commit, explain why and continue with
the correct next step.

### 8. Tell me how to enable GitHub Pages

After the first push, guide me through these GitHub website steps:

1.  Open my repository.
2.  Select **Settings → Pages**.
3.  Under **Build and deployment**, choose **GitHub Actions** as the
    source if it is not already selected.
4.  Open the **Actions** tab.
5.  Open the deployment workflow and wait for all required jobs to pass.
6.  Open the deployed website URL shown by GitHub Pages and test the
    site.

Do not claim that the website is live until the deployment workflow has
succeeded.

### 9. Test the published website

Verify or give me a checklist for:

-   The live URL opens over HTTPS.
-   The home page and navigation load.
-   Dropdown menus work on desktop and mobile.
-   Images, CSS, JavaScript, fonts, and other assets load without 404
    errors.
-   Angular routes work when opened directly or refreshed.
-   Browser developer tools show no base-path or asset-loading errors.
-   The production build works, not just the local development server.

If you cannot access my GitHub account or perform a step yourself,
clearly state what I need to click or run. Do not claim to have pushed
or deployed anything that you have not actually done.

### 10. Explain future updates

Once the first deployment works, tell me how to publish future changes.
The normal update flow is:

``` powershell
git status
git add .
git commit -m "Update KSB Solutions website"
git push
```

Explain that a successful push to the configured branch triggers GitHub
Actions to rebuild and redeploy the site automatically.

### 11. Final response format

When finished, report:

1.  Files created or changed.
2.  The exact Angular production build command.
3.  The detected build output folder.
4.  The Git commands I should run next.
5.  Any GitHub Settings steps still required.
6.  The expected live URL, clearly marked **expected** until deployment
    succeeds.
7.  Any limitations or errors that remain.

**Work carefully in small steps. Inspect first, explain important
changes, preserve my existing website, and ask before any destructive
Git operation.**

------------------------------------------------------------------------

## My simple deployment sequence

1.  Open this project folder in VS Code.
2.  Open **GitHub Copilot Chat** and select **Agent** mode if available.
3.  Paste the prompt above.
4.  Review Copilot's proposed changes before accepting them.
5.  Create the GitHub repository if I have not already created it.
6.  Run the Git commands Copilot confirms are appropriate for my
    repository.
7.  Select **Settings → Pages → GitHub Actions**.
8.  Check the **Actions** tab and open the live URL after deployment
    succeeds.

## Important note

GitHub Pages hosts the **static Angular frontend**. It does not host a
running .NET API, database, or private backend. Keep secrets and
confidential GIS data out of a public repository and public website.
