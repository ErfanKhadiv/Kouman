/**
 * Resolves a file from the /public folder, respecting Vite's `base`
 * (needed because the demo is served from /Kouman/ on GitHub Pages).
 */
export const publicAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
