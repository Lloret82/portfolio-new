import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "g6vytssc",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-08-31',
})