import { createClient } from "@sanity/client"

const client = createClient({
	projectId: import.meta.env.VITE_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
	dataset: "production", // this is from those question during 'sanity init'
	useCdn: true,
	apiVersion: "2021-08-31",
})

export default client
