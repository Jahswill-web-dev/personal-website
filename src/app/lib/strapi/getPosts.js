import axios from "axios";

export async function getPosts() {
  const response = await axios.get(
    `https://personal-blog-q8p4.onrender.com/api/articles?populate=*`
    //  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?populate=*`
    // `http://localhost:1337/api/articles?populate=*`
  );
  return response;
}
