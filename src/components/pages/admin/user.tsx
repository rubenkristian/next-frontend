"use client";

import { Button, Table, TableColumnsType } from "antd";
import React from "react";

interface DataUser {
    key: React.Key;
    no: number;
    name: string;
    email: string;
    phone_number: string;
    status: boolean;
    action: true;
}

const columns: TableColumnsType<DataUser> = [
    {
        title: "No.",
        dataIndex: "no",
    },
    {
        title: "Nama Lengkap",
        dataIndex: "name",
        sorter: true,
    },
    {
        title: "Email",
        dataIndex: "email",
        sorter: true,
    },
    {
        title: "No. Telepon",
        dataIndex: "phone_number",
        sorter: true,
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Status",
        render: (val, record, index) => {
            return (<></>);
        }
    }
]

export default function UserPage() {
    return (
        <div className="flex flex-col h-screen m-5 gap-6">
            <div className="flex justify-between">
                <span className="text-lg font-bold">Manajemen User</span>
                <Button size="large" type="primary">Tambah User</Button>
            </div>
            <Table<DataUser> columns={columns}></Table>
        </div>
    );
}