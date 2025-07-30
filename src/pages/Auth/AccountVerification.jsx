import { useState, useEffect } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { fetchVerifyUserApi } from '~/apis'
import PageLoadingSpinner from '~/components/Molecules/Loading/PageLoadingSpinner'

const AccountVerification = () => {
  //Tao state để biết được tài khoản đang được verify thành công hay chưa
  const [verified, setVerified] = useState(false)
  let [searchParams] = useSearchParams()
  const { email, token } = Object.fromEntries(searchParams)

  useEffect(() => {
    //Gọi api verify user
    if (email && token) {
      fetchVerifyUserApi({ email, token })
        .then(() => {
          setVerified(true)
        })
        .catch(() => {
          setVerified(false)
        })
    }
  }, [email, token])

  //Lấy email và token từ URL


  //Nếu không có email hoặc token thì chuyển hướng đến trang 404
  if (!email || !token) {
    return <Navigate to='/404' />
  }

  //Nếu tài khoản đang verify thì thực hiện loading trang
  if (!verified) {
    return <PageLoadingSpinner caption='Verifying your account...' />
  }
  return (
    <Navigate to={`/login?verifiedEmail=${email}`} replace={true} />
  )
}
export default AccountVerification