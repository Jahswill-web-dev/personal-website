import axios from "axios";

export  async function getPostBySlug(slug) {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`
    );
    console.log(response.data);
}