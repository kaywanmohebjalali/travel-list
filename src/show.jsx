import Test from "./test"

const Show = () => {
  return (
    <>
    <div>Show</div>
    {/* <Test name={'kaywan'} obj={{id:1}} arr={[1,2,3]} >
        <span>tag span</span>
    </Test> */}

    {/* <Test {...{name:'kaywan', obj:{id:1}, arr:[1,2,3]}} >
        <span>tag span</span>
    </Test> */}

<Test {...['a']} >
        <span>tag span</span>
    </Test>
    </>
  )
}

export default Show