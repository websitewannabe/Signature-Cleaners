import { cityData } from "@/data/cityData";
import CityPage from "@/pages/locations/CityPage";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const cityParam = params?.city;
  const citySlug = Array.isArray(cityParam) ? cityParam[0] : cityParam;

  if (!citySlug || !cityData[citySlug]) {
    return { notFound: true };
  }

  return { props: {} };
};

export default CityPage;
