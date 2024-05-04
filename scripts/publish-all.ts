import { $ } from 'bun'

const packages = (await $`ls packages`).text()

for (const pkg of packages.split('\n')) {
  if (pkg) {
    await $`cd packages/${pkg} && bun run publish`
  } else {
    console.log(pkg, 'not found')
  }
}
