import CenterFlexCol from "@/components/centerFlexCol";
import CitySearchBar from "@/components/citySearchBar";
import Logo from "@/components/firstPageLogo";
import ShortcutContainer from "@/components/shortcutContainer";
import Slogan from "@/components/slogan";

export default function Home() {
  return (
    <CenterFlexCol>
      <Logo/>
      <ShortcutContainer/>
      <Slogan/>
      <CitySearchBar/>
    </CenterFlexCol>
  )
}
