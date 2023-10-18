import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { FONTS } from "./theme";
import { WebsiteLogo } from "./components/WebsiteLogo";
import { Homepage } from "./pages/homepage";
import { FooterNewsroom } from './components/FooterNewsroom'



const App = () => (
 <main>
    <ThemeProvider theme={{ fonts: FONTS }} >
       <WebsiteLogo/>   
      <NavBar />
      <Homepage />
      
      <FooterNewsroom/>
      
    </ThemeProvider>
   </main>
)

export default App;
