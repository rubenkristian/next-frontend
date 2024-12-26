"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

export default function SearchBox() {
    return (
        <div className="flex-grow align-middle px-10">
            <Form>
                <Form.Item name="search" style={{margin: 0}}>
                    <Input suffix={<SearchOutlined/>}/>
                </Form.Item>
            </Form>
        </div>
    );
}