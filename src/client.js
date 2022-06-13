import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 't9geo9x4',
  dataset: 'production',
  useCdn: true,
});

// export const client = sanityClient({
//   projectId: 't9geo9x4',
//   dataset: 'production',
//   apiVersion: '2022-10-06',
//   useCdn: true,
//   token:
//     'skiMcJhGWNtlUSLGrtTc0FdG4HhexLRVhXjcbxKTL0Iw6S8vNIR6fa1D7ZqC87RXP2CMrg28XppeFrX2iZvMlZckxRZ20JR6SgiLPCfAIivUPdhkwS4gxPdnefQIx7kpy87gIVKysO1xNvpf3RySNDjOJiGJbjMJPEW8Fh38tuomKwI3NtqK',
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);
