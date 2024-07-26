import React from 'react'

const Button = (props : any) => {
  return (
    <Button {...props}>
       {props.children}
    </Button>
  )
}

export default Button
