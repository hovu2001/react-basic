import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDeTail from "./view.user.detail";
const UserTable = (props) => {
  const { dataUsers , loadUser } = props;

      const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
      const [dataUpdate, setDataUpdate] = useState(null);

      const [dataDetail, setDataDetail] = useState(null);
      const [isDetailOpen, setIsDetailOpen] = useState(false);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => {
        return <a href="#"
                  onClick={() => {
                    setDataDetail(record);
                    setIsDetailOpen(true);
                  }}

        >{record._id}</a>;
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined 
          onClick={() => {
            setDataUpdate(record);
            setIsModalUpdateOpen(true);
          }}
          style={{ cursor: "pointer", color: "orange"}}>

          </EditOutlined>
          <DeleteOutlined style={{ cursor: "pointer", color: "red"}} ></DeleteOutlined>
        </div>
      ),
    },
  ];

  return (
    <>
     <Table 
      columns={columns} 
      dataSource={dataUsers}
      rowKey={"_id"} />
      
      <UpdateUserModal
      setIsModalUpdateOpen={setIsModalUpdateOpen}
      isModalUpdateOpen={isModalUpdateOpen}
      dataUpdate={dataUpdate}
      setDataUpdate={setDataUpdate}
      loadUser={loadUser}
      />
    <ViewUserDeTail
      dataDetail={dataDetail}
      setDataDetail={setDataDetail}
      isDetailOpen={isDetailOpen}
      setIsDetailOpen={setIsDetailOpen}
    />

 </> )
 
};

export default UserTable;
