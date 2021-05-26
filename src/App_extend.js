import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import PlotlyComponent from './PlotlyComponent';
import EditorComponent from './EditorComponent';

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="/plot">
            <PlotlyComponent />
          </Route>
          <Route path="/editor">
            <EditorComponent />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
