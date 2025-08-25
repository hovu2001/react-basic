import { Drawer } from "antd";
const ViewUserDeTail = (props) =>{
     
    const {dataDetail, setDataDetail,isDetailOpen, setIsDetailOpen} = props;
    return (
    <>
     
      <Drawer
        title="Basic Drawer"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={()=>setIsDetailOpen(false)}
        open={isDetailOpen}
      >
        <p>Name: {dataDetail?.fullName}</p>
        <p>Email: {dataDetail?.email}</p>
        <p>Phone: {dataDetail?.phone}</p> 
      </Drawer>
    </>
  );
}

export default ViewUserDeTail;