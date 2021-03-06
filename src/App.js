import React, { useState } from "react";
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import styles from "App.module.css";
import { getLanguageObject, langLocalStorageKey } from "components/Language";
import Box from "components/generic/Box";
import i18next from "i18next";
import usePersistence from "hooks/usePersistence";
import { ReactComponent as BackToTopIcon } from "assets/icons/common/top.svg";
import Card from "components/Card";
import ScrollToTop from "react-scroll-up";
import Slideshow from "components/SlideShow";
import Products from "components/Products";
import { Switch, Route } from "react-router-dom";
import ProductInfoList from "components/ProductInfoList";
import NotFound from "components/404";
import Video from "components/Video";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = usePersistence(
    langLocalStorageKey,
    i18next.language
  );

  const onToggleLanguage = () => {
    let toggledLanguage = getLanguageObject(language, true).value;
    i18next.changeLanguage(toggledLanguage);
    setLanguage(toggledLanguage); // This ensures re-render and is currently used for persistence purpose
  };

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className={styles.wrapper}>
      <Header onToggleLanguage={onToggleLanguage} />
      <Switch>
        <Route exact path="/">
          <Card size="max">
            <Slideshow />
          </Card>
          <Main />
          <Video />
        </Route>
        <Route path="/productInfoList" component={ProductInfoList} />
        <Route path="/products">
          <Products />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
      <ScrollToTop showUnder={250}>
        <Box round radius="35px" bgColor="#C8C8C8">
          <BackToTopIcon className={styles.backToTopIcon} />
        </Box>
      </ScrollToTop>
    </div>
  );
};

export default App;
