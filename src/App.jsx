import { useState, createContext, useReducer } from 'react';
import Form from './pages/Form';
import Sidebar from './pages/Form/component/Sidebar';
import { stepItem } from './pages/Form/utils/data';
import { reducer, initialData } from './pages/Form/utils/reducer';

export const UserContext = createContext();

function App() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState('Arcade');
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <main className="md:max-w-[1440px] md:flex md:justify-center md:items-center w-full h-full">
        <div className="md:w-[940px] md:h-[600px] md:bg-white md:rounded-xl md:shadow-lg">
          <div className="relative z-0 md:flex md:p-4 md:gap-4">
            <Sidebar stepItem={stepItem} step={step} setStep={setStep} />
            <Form step={step} setStep={setStep} plan={plan} setPlan={setPlan} />
          </div>
        </div>
      </main>
    </UserContext.Provider>
  );
}

export default App;
