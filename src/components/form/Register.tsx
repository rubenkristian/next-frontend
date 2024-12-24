"use client";

import { Button, Flex, Form, Input } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function FormLogin() {
    return (
    <Flex style={{width: '50%'}} justify="center" align="flex-start" vertical>
        <Title>Register</Title>
        <Paragraph>Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi</Paragraph>
        <Form style={{width: '100%'}} layout="vertical" initialValues={{ layout: 'vertical' }}>
            <Form.Item label="Name">
              <Input placeholder="fill name"/>
            </Form.Item>
            <Form.Item label="Email">
              <Input placeholder="fill email"/>
            </Form.Item>
            <Form.Item label="Phone Number">
              <Input placeholder="fill phone number"/>
            </Form.Item>
            <Form.Item>
              <Button block type="primary">Submit</Button>
            </Form.Item>
        </Form>
      </Flex>
    )
}