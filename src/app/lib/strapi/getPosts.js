import axios from "axios";

 export  async function getPosts() {
  const response = await axios.get(
    //  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?populate=*`
    `http://localhost:1337/api/articles?populate=*`
  );
  return response;
};
