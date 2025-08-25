import { Drawer } from "antd";

const ViewUserDeTail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

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
          <div>
            <img
              height={250}
              width={250}
              src={`http://localhost:8080/images/avatar/${dataDetail.avatar || "default.png"}`}
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
            <input type="file" hidden id="btnUpload" />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Drawer>
  );
};

export default ViewUserDeTail;
