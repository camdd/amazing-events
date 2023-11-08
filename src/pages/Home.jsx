/* eslint-disable react/prop-types */
import Layout from "../layouts/Layout";
import Main from "../components/Main/Main";

const Home = (props) => {
  return (
    <div role="homeElement">
      <Layout>
        <Main title={props.title} />
      </Layout>
    </div>
  );
};

export default Home;
