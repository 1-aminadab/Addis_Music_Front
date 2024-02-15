
import CustomButton from "./components/buttons/CustomButton";
import { MusicCardComponent } from "./components/cards/MusicCard";
import { SearchInput } from "./components/inputs/SearchInput";
import { CustomHeader } from "./components/texts/Headers";
import { CircleButton } from "./styles/Button.styled";
import { CustomImage } from "./components/images/CustomImage";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/customTheme";
import { CustomHome } from "./pages/Home";
function App() {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchPerson());
  // });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CustomHome/>
      </ThemeProvider>
    </div>
  );
}

export default App;
