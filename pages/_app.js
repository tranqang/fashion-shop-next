import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/bootstrap_css.css';
import '../styles/collection_style.scss.css';
import '../styles/common.css';
import '../styles/index.css';
import '../styles/product.css';
import '../styles/checkout.scss';
import '../styles/carousel.custom.css';
import '../styles/account.scss';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
