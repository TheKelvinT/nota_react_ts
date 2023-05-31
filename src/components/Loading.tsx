import { Spin } from 'antd'

type Props = {}

const Loading = (props: Props) => {
  return (
      <div className="flex w-screen h-screen items-center justify-center spinner-container ">
               <Spin tip="Loading..." size="large" className="" >
                <div className="content  w-screen" />
            </Spin>
            </div>
  )
}

export default Loading