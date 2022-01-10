import urlBuilder from "@sanity/image-url";

export const urlFor = (source) =>
  urlBuilder({
    projectId: "e7vipft2",
    dataset: "production",
  }).image(source);
