import * as Form from "@radix-ui/react-form";
import "./Form.css";

const FormDemo = () => (
  <div className="FormContainer" role="formElement">
    <Form.Root className="FormRoot">
      <Form.Field className="FormField" name="name">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel" role="name-label">
            Name
          </Form.Label>
          <Form.Message className="FormMessage" match="valueMissing" role="name-error-message">
            Please enter your Name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" required role="name-input" />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="email">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel" role="email-label">
            Email
          </Form.Label>
          <Form.Message className="FormMessage" match="valueMissing" role="email-error-message">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="email" required role="email-input" />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="question">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel" role="question-label">
            Question
          </Form.Label>
          <Form.Message className="FormMessage" match="valueMissing" role="question-error-message">
            Please enter a question
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea className="Textarea" required role="question-textarea" />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }} role="submit-button">
          Send
        </button>
      </Form.Submit>
    </Form.Root>
  </div>
);

export default FormDemo;
