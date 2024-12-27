"use client";
import { Button, Flex, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import SearchBox from "@/components/Input/SearchBox";
import { BookOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import Title from "antd/es/typography/Title";
import AdminProfile from "./AdminProfile";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/user";
import { useSession } from "next-auth/react";

interface LayoutAppProps {
    children: React.ReactNode;
}

export default function LayoutApp({
    children
}: LayoutAppProps) {
    const route = useRouter();
    const pathname = usePathname();
    const { data, status } = useSession();

    const [selectedMenu, setSelectedMenu] = useState<Array<string>>([]);

    useEffect(() => {
        if (pathname) {
            setSelectedMenu([pathname]);
        }
    }, [pathname]);

    if (pathname === '/admin/login') {
        return (
            <>{children}</>
        )
    }

    return (
        <Layout>
            <Header style={{backgroundColor: "white"}}>
                <div className="flex items-center justify-between">
                    <Title>Logo</Title>
                    {
                        data?.user.user.role === 'user' && (
                            <SearchBox/>
                        )
                    }
                    {
                        data?.user.user.role === 'admin' && <AdminProfile name="Kristian Ruben"/>
                    }
                    {
                        !data && pathname === "/" && (
                            <div className="flex gap-4">
                                <Button style={{color: "#41A0E4"}} variant="solid">MASUK</Button>
                                <Button style={{backgroundColor: "#41A0E4", color: "white"}} variant="outlined">DAFTAR</Button>
                            </div>
                        )
                    }
                </div>
            </Header>
            <Layout>
                {
                    data?.user.user.role === 'admin' && (
                        <Sider style={{backgroundColor: "white"}}>
                            <Menu
                                onSelect={(info) => {
                                    route.push(info.key)
                                }}
                                selectedKeys={selectedMenu}
                                items={[
                                    {
                                        label: "Dashboard", 
                                        icon: <HomeOutlined />, 
                                        key: '/admin',
                                    },
                                    {
                                        label: "Manajemen User", 
                                        icon: <UserOutlined />, 
                                        key: '/admin/user'
                                    },
                                    {
                                        label: "Manajemen Produk", 
                                        icon: <BookOutlined />, 
                                        key: '/admin/product'
                                    }
                                ]}
                            />
                        </Sider>
                    )
                }
                <Layout>
                    <Content className="h-screen">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}