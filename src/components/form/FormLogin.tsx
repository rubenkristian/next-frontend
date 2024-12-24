"use client";

import { Button, Flex, Form, Input } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function FormLogin() {
    return (
    <Flex style={{width: '50%'}} justify="center" align="flex-start" vertical>
        <Title>Selamat Datang Admin</Title>
        <Paragraph>Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi</Paragraph>
        <Form style={{width: '100%'}} layout="vertical" initialValues={{ layout: 'vertical' }}>
            <Form.Item label="Email / Nomor Telpon">
              <Input placeholder="example: admin@gmail.com"/>
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password placeholder="input password"/>
            </Form.Item>
            <Form.Item>
              <Button block type="primary">Submit</Button>
            </Form.Item>
        </Form>
      </Flex>
    )
}