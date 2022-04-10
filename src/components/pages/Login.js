import React, { useState } from "react"
import { PageLayout, PasswordInput, Input } from "components/common"

import styled from "styled-components"

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`

export default function Login() {
  const [formFields, setFormFields] = useState({ username: "", password: "" })

  function handleInputChange(e) {
    e.persist()
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          name='username'
          placeholder='Username'
          onChange={handleInputChange}
          value={formFields.username}
          type='text'
        />
        <PasswordInput
          name='password'
          onChange={handleInputChange}
          value={formFields.password}
        />
      </Form>
    </PageLayout>
  )
}
