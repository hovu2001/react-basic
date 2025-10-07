import { Drawer } from "antd";
import { useState } from "react";
const ViewUserDeTail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Drawer
      width={"40vw"}
      title="User Detail"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => setIsDetailOpen(false)}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Name: {dataDetail.fullName}</p>
          <p>Email: {dataDetail.email}</p>
          <p>Phone: {dataDetail.phone}</p>
          <p>Avatar: {dataDetail.avatar}</p>
          <br />
          <p>Avatar:</p>
          <div
            style={{
              marginTop: "10px",
              height: "100px",
              width: "150px",
              border: "1px solid #ccc",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={`http://localhost:8080/images/avatar/${
                dataDetail.avatar || "default.png"
              }`}
              alt="avatar"
            />
          </div>
          <div>
            <label
              htmlFor="btnUpload"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "orange",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload Avatar
            </label>
            <input
              type="file"
              hidden
              id="btnUpload"
              onChange={handleImageChange}
            />
            {imagePreview && (
               <div
            style={{
              marginTop: "10px",
              height: "100px",
              width: "150px",
              border: "1px solid #ccc",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={imagePreview}
              alt="avatar"
            />
          </div>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Drawer>
  );
};

export default ViewUserDeTail;
