import React from 'react'
import { useShowTotal } from './context'
import '../app/globals.css'
import { getBills , getPeople } from '@/functions/localstorage'

const ShowTotals = () => {
  const { isShowTotalVisible , setIsShowTotalVisible } = useShowTotal();
  const [bills, setBills] = React.useState([]);
  const [people, setPeople] = React.useState([]);
  const [sum, setSum] = React.useState([]);

  React.useEffect(() => {
    setBills(getBills());
    setPeople(getPeople());
  }, [isShowTotalVisible]);

  React.useEffect(() => {
    const newSum = people.map(p => ({ Name: p, Amount: 0 }));
    
    bills.forEach(bill => {
        if (bill.selectedPeople && bill.selectedPeople.length > 0){
          const perPersonAmount = bill.amount / bill.selectedPeople.length

          bill.selectedPeople.forEach((person) => {
            const personIndex = newSum.findIndex(entry => entry.Name === person);
            if (personIndex !== -1) {
              newSum[personIndex].Amount += perPersonAmount;
            }
          })
        }
      })

      setSum(newSum)
  }, [people, bills]); 
  React.useEffect(() => {
  }, [sum]);

const okButton = () => {
  setIsShowTotalVisible(false)
}

  return (
    <div className='showTotalContainer'>
        <div className={`showTotal h-96 ${(isShowTotalVisible) ? 'visible' : ''} flex-col absolute z-5`}>
          <div className="w-full h-10 p-3 flex items-center text-xl mt-2">TOTALS</div>
          <div className="showAllExpenses w-4/5 h-72 overflow-y-auto p-4 ml-8">
            <div className="w-full flex justify-between items-center mb-4">
              <p><b>NAME</b></p>
              <p><b>TOTAL</b></p>
            </div>
            {sum.map((s , i) => (
              <div key={i} className="w-full flex justify-between items-center">
                <div className="">{s.Name}</div>
                <div className="">{s.Amount} ฿</div>
              </div>
            ))}
          </div>
          <div className="w-full h-10 flex justify-end items-center p-5">
            <button type="button" className='text-blue-500 text-xl' onClick={() => okButton()}>OK</button>
          </div>
        </div>
    </div>
  )
}
export default ShowTotals