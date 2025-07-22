
import { Button, Input, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { createUserAPI } from "../../services/api.service";
const UpdateUserModal = (props) => {

          const [fullName, setFullName] = useState("");
          const [id, setId] = useState("");
          const [phone, setPhone] = useState("");
        
          const {isModalUpdateOpen,setIsModalUpdateOpen, dataUpdate, setDataUpdate} = props;

          useEffect(() => {
              console.log("check data Update", dataUpdate);
              if(dataUpdate){
                setId(dataUpdate._id)
                setFullName(dataUpdate.fullName)
                setPhone(dataUpdate.phone)
              }
          }, [dataUpdate])

        

  const showModal = () => {
    setIsModalUpdateOpen(true);
  };
  const handleOk = () => {
    setIsModalUpdateOpen(false);
  };
  const handleCancel = () => {
    setIsModalUpdateOpen(false);
  };

//   const handleSubmitBtn = async () => {
 
//     const res = await createUserAPI(fullName, email, password, phone);
//     if (res.data) {
//       notification.success({
//         message: "create user",
//         description: "Tao user thanh cong",
//       });
//      resetAndCloseModal();
// //      await loadUser();
//     } else {
//       notification.error({
//         message: "Error create user",
//         description: JSON.stringify(res.message),
//       });
//     }
//   };

  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setFullName("");
    setId("");
    setPhone("");
    setDataUpdate(null);
  };


        return (
                <Modal
        title="Update A User"
        open={isModalUpdateOpen}
        // onOk={() => handleSubmitBtn()}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText={"Save"}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
            <div>
            <span>Id</span>
            <Input
              value={id}
             disabled
            />
          </div>
          <div>
            <span>Fullname</span>
            <Input
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
          </div>
        
          <div>
            <span>Phone number</span>
            <Input
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
        </div>
      </Modal>

        );

}
export default UpdateUserModal;