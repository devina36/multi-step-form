import { useState, createContext, useReducer } from 'react';
import Form from './pages/Form';
import Sidebar from './pages/Form/component/Sidebar';
import { stepItem } from './pages/Form/utils/data';
import { reducer, initialData } from './pages/Form/utils/reducer';

export const UserContext = createContext();

function App() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState('Arcade');
  const [bill, setBill] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <main className=" max-w-[1440px] flex justify-center items-center w-full h-full">
        <div className=" w-[940px] h-[600px] bg-white rounded-xl shadow-lg">
          <div className="flex p-4 gap-4">
            <Sidebar stepItem={stepItem} step={step} setStep={setStep} />
            <Form
              step={step}
              setStep={setStep}
              plan={plan}
              setPlan={setPlan}
              bill={bill}
              setBill={setBill}
            />
          </div>
        </div>
      </main>
    </UserContext.Provider>
  );
}

export default App;
