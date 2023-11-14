/* eslint-disable react/prop-types */
import Layout from "../layouts/Layout";
import Main from "../components/Main/Main";
import { Provider } from "react-redux";
import { store } from '../store';

const Home = (props) => {
  return (
    <Provider store={store}>
      <div role="homeElement">
        <Layout>
          <Main title={props.title} />
        </Layout>
      </div>
    </Provider>
  );
};

export default Home;
