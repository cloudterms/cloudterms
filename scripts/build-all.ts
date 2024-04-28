import { $ } from "bun";

const packages = (await $`ls packages`).text();

for (const pkg of packages.split("\n")) {
  if (pkg) {
    await $`cd packages/${pkg} && rm -rf ./dist && bun run build`;
  } else {
    console.log(pkg, "not found");
  }
}
