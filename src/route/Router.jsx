import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Services from "../components/Services";
import Work from "../components/Work";
import Team from "../components/Team";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      // HOME PAGE (FULL LANDING)
      {
        index: true,
        element: (
          <>
            <Hero />
            <TrustedBy />
            <Services />
            <Work />
            <Team />
            <Contact />
          </>
        ),
      },

      // WORK PAGE
      {
        path: "work",
        element: <Work />,
      },

      // CONTACT PAGE
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;