import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./component/NavBar"

const App = () => {
  return (
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"` //1024px
    }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <Show above="lg">
      <GridItem area="aside" bg="gold">Aside</GridItem>
    </Show>
    <GridItem area="main" bg="dodgerblue">Main</GridItem>
  </Grid>
)}

export default App