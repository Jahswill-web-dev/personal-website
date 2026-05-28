import PageNotFound from "../_components/notfound";

export async function generateStaticParams() {
  return [];
}

export default function Page() {
  return <PageNotFound />;
}
