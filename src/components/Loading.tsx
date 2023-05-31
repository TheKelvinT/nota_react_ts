import { Spin } from 'antd'

type Props = {}

const Loading = () => {
  return (
      <div className="flex w-screen min-h-screen items-center justify-center spinner-container bg-primary">
               <Spin tip="Loading..." size="large" className=""  >
                <div className="content  w-screen" />
            </Spin>
            </div>
  )
}

export default Loading