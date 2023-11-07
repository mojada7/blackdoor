import CenterFlexCol from "@/components/centerFlexCol";
import CologoContainer from "@/components/coLogoContainer";
import Logo from "@/components/firstPageLogo";
import SearchCity from "@/components/searchCity";
import ShortcutContainer from "@/components/shortcutContainer";
import Slogan from "@/components/slogan";

export default function Home() {
  return (
    <CenterFlexCol>
      <Logo/>
      <ShortcutContainer/>
      <Slogan/>
      <SearchCity />
      <CologoContainer />
    </CenterFlexCol>
  )
}
