import { Flex, Spin } from 'antd'
const SpinLoading = ({isLoading = false}) => (
  isLoading && (
    <Flex align="center" gap="middle">
      <Spin size="large" />
    </Flex>
  )
  )
export default SpinLoading