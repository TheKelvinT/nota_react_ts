import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="flex max-w-screen min-h-[100vh] items-center justify-center spinner-container bg-primary overflow-hidden ">
      <Spin tip="Loading..." size="large" className="">
        <div className="content  w-screen " />
      </Spin>
    </div>
  );
};

export default Loading;
