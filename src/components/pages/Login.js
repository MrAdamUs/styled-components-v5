import React, { useState } from "react"
import { PageLayout } from "components/common/PageLayout"
import { Input } from "components/common/Input"
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
        <Input
          name='password'
          placeholder='Password'
          onChange={handleInputChange}
          value={formFields.password}
          type='password'
        />
      </Form>
    </PageLayout>
  )
}
