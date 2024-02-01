import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/slice";
// const dispatch = useDispatch();

const LoginForm: React.FC = () => {
  const userToken = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const callLogin = async (params: type) => {
    console.log("callLogin");
    console.log(params);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "csrftoken=8UG90Lqys8ntYAJofKnamAnjgVZZ5FHs; messages=W1siX19qc29uX21lc3NhZ2UiLDAsMjUsIlN1Y2Nlc3NmdWxseSBzaWduZWQgaW4gYXMgYnJvLiIsIiJdXQ:1rV7Uw:YNrARfCIrgQlMa0E0QSOQ7HcxV8liOot_Aksa9obND4; sessionid=0zsnacc9kdh51d3tyqc9xjw56iupkjz0"
    );

    // let raw = JSON.stringify({
    //   username: "oyekamal",
    //   password: "123456789",
    // });
    let raw = JSON.stringify(params);
    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/account/login/", requestOptions)
      .then((response) => response.text())
      .then((result) => dispatch(login(result)))
      .catch((error) => console.log("error", error));
  };
  const onFinish = (values: any) => {
    callLogin(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
  };

  console.log(userToken);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
