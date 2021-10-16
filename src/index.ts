import * as core from "@actions/core";
import { fetch } from "popsicle";

export async function main() {
  const token = core.getInput("token");
  const environment = core.getInput("environment");
  const ref = core.getInput("ref") || process.env.GITHUB_SHA;
  const repository = process.env.GITHUB_REPOSITORY;

  const response = await fetch("https://deploy-api.timely.dev/github/deploy", {
    method: "POST",
    body: JSON.stringify({
      token,
      environment,
      repository,
      ref,
    }),
  });

  const payload = await response.text();

  if (response.status >= 400) {
    core.setFailed(`Invalid response: ${response.status} ${payload}`);
  } else {
    core.info(`Successful response: ${response.status} ${payload}`);
  }
}

main().catch((err) => core.setFailed(err));
