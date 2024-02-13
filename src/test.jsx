

const Test = (prop) => {
    const children=prop.children
    console.log(prop);
  return (
    <>
    <div>Test</div>
    {children}
    </>
  )
}

export default Test