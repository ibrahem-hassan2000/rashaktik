import { useTranslations } from "next-intl";
import Offer from "../../../components/Offer";

export default function Home() {
  const t =useTranslations("home.about")
  return (
  <>
  <Offer/>
  </>
  );
}
