import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "ryn0xfc6",
    dataset: "production",
    useCdn: true,
});