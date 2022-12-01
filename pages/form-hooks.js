import { Button, Form, Input, Radio, Upload } from "antd";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Container from "./components/Container";
import Context from "./components/Context";



export default function form() {

  const {email, pass, handleEmail, handlePass, onSubmit} = useContext(Context)

const {
  register, 
   formState: {
    errors,
    isValid,
   },
      handleSubmit,
   } = useForm()

  return (
    <Container title="Form wuth using hook useForm">
     <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Fill in form</h1>
                    <Form.Item label="Input">
          <Input type="email" {...register("email", {
              required: 1,
              minLength: {
                value: 8,
                message: "8 minimum"
              },
              maxLength: {
                value: 20,
                message: "20 max"
              }
            })} value={email} onChange={(e) => handleEmail(e)} className="w-1/3" />
        </Form.Item> 
        <div>{errors?.email && <p>{errors?.email.message || "Other Erorr"}</p>}</div>
        <Form.Item label="Input">
          <Input type="password" {...register("pass", {
            required: 1,
            minLength: {
              value: 8,
              message: "8 minimum"
            }
          })} value={pass} onChange={(e) => handlePass(e)} className="w-1/3"/>
        </Form.Item>
            <div>{errors?.pass && <p>{errors?.pass.message || "Other Erorr"}</p>}</div>
            <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
          <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
     </Form>
  </Container>
  
  )
}
