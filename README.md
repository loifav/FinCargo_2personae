# Fincargo Platform Frontend

## Practical Information

**URL:** [https://frontend-fincargo-180162974123.europe-west6.run.app/](https://frontend-fincargo-180162974123.europe-west6.run.app/)

**Technologies**

- Framework: React JS
- Builder: Vite.js
- CSS Framework: Tailwind

## Branching Rules

- **main**: Do not develop directly on the main branch. Each new commit on this branch automatically triggers a production deployment of the application.

- **develop**: This branch will be created soon to manage deployments to a testing environment.

- **feat/persona-xxxx**: Each new feature should be developed on a branch starting with `feat/`, followed by the first letter of the persona (e.g., `c` for carrier or `f` for freight forwarder), and then the feature name. For example, `feat/c-loadinvoice` or `feat/f-approveinvoice`.

## GCP Hosting

We use Artifact Registry to store the application's Docker image, which is then deployed on Cloud Run. With Cloud Build and a configured trigger, each new commit on the main branch automatically initiates the deployment process by interpreting the `cloudbuild.yaml` file.
