import { useTranslations } from "next-intl";
import Offer from "../../../components/Offer";
import SliderPackg from "../../../components/SliderPackg";
import Map from "../../../components/Map";
import Story from "../../../components/Story";
import Programs from "../../../components/Programs";
import HoursWork from "../../../components/HoursWork";

export default function Home({params}) {
  const t =useTranslations("home.about")
  return (
  <>
  <div style={{height:400}}></div>
  <HoursWork/>
  <Programs locale={params.locale}/>
  <Offer/>
  <SliderPackg/>
  <Map/>
  <Story/>
  </>
  );
}
