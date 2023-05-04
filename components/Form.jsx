import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import {
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Container,
  FormHelperText,
  Alert,
  Stack
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import axios from 'axios';

const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  color: #d32f2f;
`;

const Register = () => {
  const theme = createTheme();
  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  const onhandlePost = async (data) => {
    await axios
      .post('/api/hello', data)
      .then(res => {
        console.log(res, '성공');
        setSuccess(true)
      })
      .catch(err => {
        console.log(err, '실패');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    }
    const { name, company, email, phone } = data;

    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(email)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else {
      setEmailError('');
    }

    if (!checked) alert('약관에 동의해주세요.');
    if (emailRegex.test(email) && name && company && phone && checked) onhandlePost(data);
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth name="name" type="text" label="이름" autoFocus="true" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth name="company" type="text" label="회사명" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    fullWidth
                    type="email"
                    name="email"
                    label="이메일 주소"
                    error={emailError !== '' || false}
                  />
                  <FormHelperTexts>{emailError}</FormHelperTexts>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    fullWidth
                    label="전화번호"
                    name="phone"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'left' }}>
                  <FormControlLabel
                    control={<Checkbox onChange={handleAgree} color="primary" />}
                    label="마케팅 정보 수신에 동의합니다."
                  />
                  <span>
                    <Link href="/agreement/marketing">전문보기</Link>
                  </span>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, padding: 2 }}
                size="large"
              >
                제출하기
              </Button>
            </FormControl>
          </Box>

          <Stack sx={{ width: '100%' }} mt={2} spacing={2}>
            {success 
              ? <Alert severity="success">제출이 완료되었습니다.</Alert> 
              : ''
            }
          </Stack>

        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Register;

// const AgreeView = styled.span`
//   display: inline-block;
//   font-size: 14px;
//   color: #979797;
//   text-decoration: underline;
// `;