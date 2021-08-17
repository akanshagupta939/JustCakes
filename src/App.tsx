import styles from "./styles.module.scss";
import Particles from "react-particles-js";
import { Navigation } from "./components/navigation";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/home";
import { ContactUs } from "./components/contactus";
import { Menu } from "./components/menu";
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
function App() {
  const particleConfig: any = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 600,
        },
      },
      color: {
        value: "#ffc300",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ffc300",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 0.1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 100,
          duration: 0.2,
        },
      },
    },
    retina_detect: true,
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Old Standard TT", "serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Particles
          params={particleConfig}
          className={styles.particle_background}
        />
        <div className={styles.app_header}>
          <Navigation></Navigation>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/order" component={ContactUs} />
          {/* <Route component={Error} />  */}
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
