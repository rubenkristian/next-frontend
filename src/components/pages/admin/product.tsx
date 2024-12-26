"use client";

import { Table, TableColumnsType } from "antd";
import React from "react";

interface DataProduct {
    key: React.Key;
    no: number;
    name: string;
    status: boolean;
    action: true;
}

const columns: TableColumnsType<DataProduct> = [
    {
        title: "No.",
        dataIndex: "no",
    },
    {
        title: "Nama Barang",
        dataIndex: "name",
        sorter: true,
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Status",
        dataIndex: "id",
    }
]

export default function ProductPage() {
    return (
        <div className="h-screen m-5">
            <Table<DataProduct> columns={columns}></Table>
        </div>
    );
}