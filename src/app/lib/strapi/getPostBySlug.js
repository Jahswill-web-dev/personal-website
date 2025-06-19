import axios from "axios";

export  async function getPostBySlug(slug) {
    const response = await axios.get(
        `https://personal-blog-q8p4.onrender.com/api/posts?filters[slug][$eq]=${slug}&populate=*`
    );
    console.log(response.data);
}