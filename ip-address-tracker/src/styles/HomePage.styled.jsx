import styles from "styled-components";

import bgImage from "/src/assets/images/pattern-bg-desktop.png";

export const HomePageContainer = styles.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
`;
