import styled, { keyframes } from "styled-components"

const rotation = keyframes`
 form {
   transform: rotate(0deg)
 }

 to{
 transform: rotate(360deg)
 }
`

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: solid 1px #f8049c;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`
export { Spinner }
