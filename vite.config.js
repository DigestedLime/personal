import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const nowPagePath = path.resolve(__dirname, 'src/pages/NowPage.jsx')
const generatedMetaPath = path.resolve(__dirname, 'src/generated/nowPageLastUpdated.js')

function formatMonthYear(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function writeNowPageLastUpdatedModule() {
  const { mtime } = fs.statSync(nowPagePath)
  const lastUpdated = formatMonthYear(mtime)

  fs.mkdirSync(path.dirname(generatedMetaPath), { recursive: true })
  fs.writeFileSync(
    generatedMetaPath,
    `export const nowPageLastUpdated = ${JSON.stringify(lastUpdated)}\n`,
    'utf8'
  )
}

function nowPageLastUpdatedPlugin() {
  return {
    name: 'now-page-last-updated',
    buildStart() {
      writeNowPageLastUpdatedModule()
    },
    configureServer(server) {
      writeNowPageLastUpdatedModule()

      server.watcher.on('change', (changedFile) => {
        if (path.resolve(changedFile) === nowPagePath) {
          writeNowPageLastUpdatedModule()
        }
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nowPageLastUpdatedPlugin()],
  base: '/personal/',
})

