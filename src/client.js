import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "e7vipft2",
  dataset: "production",
  apiVersion: "2022-01-10", // use current UTC date - see "specifying API version"!
  // token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
