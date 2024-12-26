import { PoweroffOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Flex, Popover, Space, Typography } from "antd";

const { Text } = Typography;

interface AdminProfileProps {
    name: string;
}

const PopupProfile = ({email, name}: {email: string; name: string;}) => {
    return (
        <Card
            bordered={false}
            title={
            <div className="flex flex-col items-center p-5">
                <Avatar size={60} icon={<UserOutlined />} />
                <span className="text-normal-text font-normal">{name}</span>
                <span className="text-small-text text-end">{email}</span>
            </div>
            }
        >
            <div className="flex gap-2 justify-center text-quit"><PoweroffOutlined /> <span>Keluar</span></div>
        </Card>
    )
}

export default function AdminProfile({
    name,
}: AdminProfileProps) {
    return (
        <Popover placement="bottomRight" overlayInnerStyle={{padding: 0}} arrow={false} trigger="click" content={PopupProfile({email: "rubenkristian96@gmail.com", name: name})}>
            <div className="flex gap-2">
                <div className="flex flex-col">
                    <span className="text-small-text text-end text-theme">Hello Admin</span>
                    <span className="text-normal-text font-normal">{name}</span>
                </div>
                <Space/>
                <Avatar size={40} icon={<UserOutlined />} />
            </div>
        </Popover>
    );
}