"use client";

import { Button, Flex, Form, Input } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { signIn } from "next-auth/react";

interface FormLogin {
  username: string;
  password: string;
}

async function OnFinishForm(value: FormLogin) {
  const res = await signIn("credentials", {
    redirect: false,
    username: value.username,
    password: value.password,
  })

  console.log(res);
}

export default function FormLogin() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-1 justify-center bg-theme">
          <Flex style={{width: '70%'}} justify="center" align="center" vertical>
            <Title>Nama Aplikasi</Title>
            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
          </Flex>
      </div>
      <div className="flex flex-1 justify-center">
        <Flex style={{width: '50%'}} justify="center" align="flex-start" vertical>
          <Title>Selamat Datang Admin</Title>
          <Paragraph>Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi</Paragraph>
          <Form onFinish={OnFinishForm} style={{width: '100%'}} layout="vertical" initialValues={{ layout: 'vertical' }}>
              <Form.Item name="username" label="Email / Nomor Telpon" rules={[{required: true}]}>
                <Input size="large" placeholder="example: admin@gmail.com"/>
              </Form.Item>
              <Form.Item name="password" label="Password" rules={[{required: true}]}>
                <Input.Password size="large" placeholder="input password"/>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" size="large" block type="primary">Submit</Button>
              </Form.Item>
          </Form>
        </Flex>
      </div>
    </div>
  )
}