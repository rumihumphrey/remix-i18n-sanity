import { createClient } from "@sanity/client";

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!;
export const dataset = process.env.SANITY_STUDIO_DATASET!;

export default createClient({
  projectId,
  dataset,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-10-02",
});
