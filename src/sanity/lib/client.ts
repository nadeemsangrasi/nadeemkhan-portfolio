import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const Client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
