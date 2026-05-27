import { defineConfig } from 'vite'

export default defineConfig({
  // 1. If deploying to your primary domain (e.g., https://DevMittal1.github.io/ or a custom domain), leave base as '/'
  // 2. If deploying to a project-level repository subfolder (e.g., https://DevMittal1.github.io/portfolio/), 
  //    change the base parameter below to match your repository name: '/portfolio/'
  base: '/',
})
