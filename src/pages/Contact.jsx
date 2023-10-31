import Layout from "../layouts/Layout";
import Form from "../components/Form.jsx";
import "./Contact.css";
import "../components/main.css";

const Contact = () => {
  return (
    <Layout>
      <h1 className="page_title">Contact</h1>
      <div className="contact_title">
        Let us know if you have any questions!
      </div>
      <Form />
    </Layout>
  );
};

export default Contact;
