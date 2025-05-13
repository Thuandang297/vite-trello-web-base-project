import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Lock from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import ClearIcon from '@mui/icons-material/Clear'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Box, Button, IconButton, InputAdornment, TextField, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import FieldErrorAlert from '~/components/Form/FieldErrorAlert'
import { fetchLogoutUserApi, fetchUpdateUserApi } from '~/redux/users/userSlice'
import { NEW_PASSWORD_CONFIRMATION_MESSAGE, PASSWORD_CONFIRMATION_MESSAGE, PASSWORD_RULE, PASSWORD_RULE_MESSAGE } from '~/utils/validators'
const SecurityTab = () => {
  const [hiddenPassword, setHiddenPassword] = useState({
    currentPassword: true,
    newPassword: true,
    confirmPassword: true
  })
  const { register, handleSubmit, watch, setValue, clearErrors, formState, control } = useForm()
  const { errors } = formState
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
    clearErrors('confirmPassword')
    //Call api to change password
    dispatch(fetchUpdateUserApi(data))
    dispatch(fetchLogoutUserApi())
    // fetchChangePasswordUserApi(data).then(response => {
    //   //Show toast success
    //   toast.success(response?.message || 'Password has changed!')
    //   dispatch(fetchLogoutUserApi())
    // })
  }
  const currentPassword = watch('currentPassword')
  const newPassword = watch('newPassword')
  const confirmPassword = watch('confirmPassword')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ minWidth: '700px', height: 'fit-content', padding: '1em', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', gap: 2, borderRadius: '5px' }} >
        <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700' }}>
          <Typography variant='h4'>Change password</Typography>
        </Box>
        {/* Current Password */}
        <Controller
          name="currentPassword"
          control={control}
          defaultValue=""
          rules={{
            required: PASSWORD_RULE_MESSAGE
          }}
          render={({ field }) => (
            <>
              <TextField
                {...field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: '#fff', mr: 1, my: 0.5 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {
                        currentPassword && <IconButton onClick={() => setValue('currentPassword', '')}>
                          <Tooltip title='Clear value'>
                            <ClearIcon />
                          </Tooltip>
                        </IconButton>
                      }
                      <IconButton onClick={() => setHiddenPassword((prev) => ({ ...prev, currentPassword: !hiddenPassword.currentPassword }))} edge="end">
                        <Tooltip title={currentPassword ? 'View password' : 'Hidden password'}>
                          {hiddenPassword.currentPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </Tooltip>
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                type={hiddenPassword.currentPassword ? 'password' : 'none'}
                label="Current password" sx={{ width: '100%' }}
                error={!!errors.currentPassword}
                {...register('currentPassword',
                  {
                    required: PASSWORD_RULE_MESSAGE,
                    pattern: {
                      value: PASSWORD_RULE,
                      message: PASSWORD_RULE_MESSAGE
                    }
                  })} />
              <FieldErrorAlert errors={errors} fieldName="currentPassword" />
            </>)}
        />
        {/* New Password */}
        <Controller
          name="newPassword"
          control={control}
          defaultValue=""
          rules={{
            required: PASSWORD_RULE_MESSAGE,
            validate: value =>
              value !== currentPassword || NEW_PASSWORD_CONFIRMATION_MESSAGE
          }}
          render={({ field }) => (
            <>
              <TextField
                {...field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenIcon sx={{ color: '#fff', mr: 1, my: 0.5 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {
                        newPassword && <IconButton onClick={() => setValue('newPassword', '')}>
                          <Tooltip title='Clear value'>
                            <ClearIcon />
                          </Tooltip>
                        </IconButton>
                      }
                      <IconButton onClick={() => setHiddenPassword((prev) => ({ ...prev, newPassword: !hiddenPassword.newPassword }))} edge="end">
                        <Tooltip title={hiddenPassword.newPassword ? 'View password' : 'Hidden password'}>
                          {hiddenPassword.newPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </Tooltip>
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                type={hiddenPassword.newPassword ? 'password' : 'none'}
                label="New password" sx={{ width: '100%' }}
                error={!!errors.newPassword}
                {...register('newPassword',
                  {
                    required: PASSWORD_RULE_MESSAGE,
                    pattern: {
                      value: PASSWORD_RULE,
                      message: PASSWORD_RULE_MESSAGE
                    }
                  })} />
              <FieldErrorAlert errors={errors} fieldName="newPassword" />
            </>
          )}
        />
        {/* Confirm password*/}
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: PASSWORD_RULE_MESSAGE,
            validate: value =>
              value === newPassword || PASSWORD_CONFIRMATION_MESSAGE
          }}
          render={({ field }) => (
            <>
              <TextField
                {...field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CheckCircleIcon sx={{ color: '#fff', mr: 1, my: 0.5 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {
                        confirmPassword && <IconButton onClick={() => setValue('confirmPassword', '')}>
                          <Tooltip title='Clear value'>
                            <ClearIcon />
                          </Tooltip>
                        </IconButton>
                      }
                      <IconButton onClick={() => setHiddenPassword((prev) => ({ ...prev, confirmPassword: !hiddenPassword.confirmPassword }))} edge="end">
                        <Tooltip title={hiddenPassword.confirmPassword ? 'View password' : 'Hidden password'}>
                          {hiddenPassword.confirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </Tooltip>
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                type={hiddenPassword.confirmPassword ? 'password' : 'none'}
                label="Confirm new password" sx={{ width: '100%' }}
                error={!!errors.confirmPassword}
                {...register('confirmPassword',
                  {
                    required: PASSWORD_CONFIRMATION_MESSAGE,
                    pattern: {
                      value: PASSWORD_RULE,
                      message: PASSWORD_RULE_MESSAGE
                    }
                  })}
              />
              <FieldErrorAlert errors={errors} fieldName="confirmPassword" />
            </>
          )}
        />

        {/* Action button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          className={'interceptor-loading'}
        >
          Save
        </Button>
      </Box>
    </form >
  )
}

export default SecurityTab