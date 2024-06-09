import { useTranslations } from "next-intl";
import Offer from "../../../components/Offer";
import SliderPackg from "../../../components/SliderPackg";
import Map from "../../../components/Map";
import Story from "../../../components/Story";

export default function Home() {
 
  const t =useTranslations("home.about")
  return (
  <>
  <Offer/>
  <SliderPackg/>
  <Map/>
  <Story/>
  </>
  );
}
