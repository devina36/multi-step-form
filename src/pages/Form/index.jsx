import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { CheckListIcon } from '../../assets/images';
import InputField from '../../component/InputField';
import { addOnsService, plans } from './utils/data';

const Form = ({ step, setStep, plan, setPlan }) => {
  const { state, dispatch } = useContext(UserContext);

  const handleChangeFormStepOne = (event, type) => {
    let data;
    data = { type: type, name: event.target.value };
    return dispatch(data);
  };

  return (
    <div className="absolute bg-white px-[25px] md:px-0 rounded-lg mx-[16px] top-[99px] md:relative md:top-0 md:mx-auto md:w-[450px] md:min-w-[450px] md:h-auto">
      {step === 1 && (
        <div className="mb-[28px]">
          <div className="mb-[20px] mt-[28px] md:mt-[35px] md:mb-[35px]">
            <h1 className=" text-2xl md:text-[32px] mb-2 md:mb-0 text-marine leading-normal font-bold">
              Personal info
            </h1>
            <h3 className="text-cool text-base md:text-lg font-light tracking-[0.015em] md:tracking-[-0.045em]">
              Please provide your name, email address, and phone number.
            </h3>
          </div>
          <div className="flex gap-[14px] md:gap-[22.5px] flex-col">
            <InputField
              titleName={'name'}
              name="name"
              type="text"
              error={false}
              onChange={(e) => handleChangeFormStepOne(e, 'changed_name')}
              placeholder={'e.g. Stephen King'}
            />
            <InputField
              titleName={'email address'}
              name="email"
              type="email"
              error={false}
              onChange={(e) => handleChangeFormStepOne(e, 'changed_email')}
              placeholder={'e.g. stephenking@lorem.com'}
            />
            <InputField
              titleName={'phone number'}
              name="phone"
              type="tel"
              error={true}
              onChange={(e) => handleChangeFormStepOne(e, 'changed_phone')}
              placeholder={'e.g. +1 234 567 890'}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mb-7">
          <div className="mb-[20px] mt-[28px] md:mt-[35px] md:mb-[35px]">
            <h1 className="  text-2xl md:text-[32px] mb-2 md:mb-0 text-marine leading-normal font-bold">
              Select your plan
            </h1>
            <h3 className="text-cool text-base md:text-lg font-light tracking-[0.015em] md:tracking-[-0.045em]">
              You have the option of monthly or yearly billing
            </h3>
          </div>
          <div className="grid md:grid-flow-col md:grid-cols-3 gap-[10px] md:gap-4">
            {plans.map((item) => (
              <label
                className="relative"
                key={item.name}
                htmlFor={`option-${item.name}`}
              >
                <input
                  type="radio"
                  name={`option-${item.name}`}
                  id={`option-${item.name}`}
                  className="absolute w-full h-full top-0 rounded-[10px] appearance-none peer border border-transparent cursor-pointer hover:border-purplish transition-all ease-in-out delay-150 duration-300"
                  checked={item.name === plan ? true : false}
                  onChange={(e) => {
                    setPlan(item.name);
                    const data = {
                      type: 'changed_plan',
                      plan: item.name,
                      price:
                        state.bill === 'Yearly'
                          ? item.priceYear
                          : item.priceMonthly,
                    };
                    dispatch(data);
                  }}
                />
                <div className="border flex flex-row gap-3 md:gap-0 items-center md:items-start md:flex-col border-light-gray rounded-[10px] px-4 pt-4 md:pt-5 pb-4 md:pb-4 peer-checked:bg-alabaster peer-checked:border-purplish">
                  <img
                    src={item.img}
                    alt={`img-${item.name}`}
                    className="md:mb-10"
                  />
                  <div>
                    <h4 className="text-marine font-bold tracking-tight">
                      {item.name}
                    </h4>
                    {state.bill === 'Yearly' ? (
                      <>
                        <p className="text-cool text-sm">
                          ${item.priceYear}/yr
                        </p>
                        <p className="text-marine text-sm font-medium tracking-[-0.075em] mt-1">
                          2 months free
                        </p>
                      </>
                    ) : (
                      <p className="text-cool text-sm">
                        ${item.priceMonthly}/mo
                      </p>
                    )}
                  </div>
                </div>
              </label>
            ))}
          </div>
          <div className="mt-[25px] md:mt-8 w-full bg-alabaster py-[14px] rounded-lg flex justify-center items-center md:pr-[15px] gap-6">
            <label className="relative inline-flex justify-center items-center gap-5 md:gap-6 cursor-pointer">
              <input
                type="checkbox"
                checked={state.bill === 'Monthly' ? false : true}
                onChange={(e) => {
                  const plan = plans.find((d) => d.name === state.plan);
                  const data = {
                    type: 'changed_bill',
                    bill: e.target.checked === true ? 'Yearly' : 'Monthly',
                    price:
                      e.target.checked === true
                        ? plan.priceYear
                        : plan.priceMonthly,
                  };
                  dispatch(data);
                }}
                className="sr-only peer"
              />
              <div className="w-[40px] relative h-5 bg-marine peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all">
                <div className="absolute w-full h-full bg-transparent rounded-full " />
              </div>
              <p className="text-sm font-bold leading-none order-first text-marine peer-checked:text-cool">
                Monthly
              </p>
              <p className="text-sm font-bold leading-none text-cool peer-checked:text-marine">
                Yearly
              </p>
            </label>
          </div>
        </div>
      )}

      {step === 3 && (
        <>
          <div className="my-[35px]">
            <h1 className=" text-[32px] text-marine leading-normal font-bold">
              Pick add-ons
            </h1>
            <h3 className="text-cool text-lg font-light tracking-[-0.045em]">
              Add-ons help enhance your gaming experience.
            </h3>
          </div>
          <div className="flex flex-col gap-4 pt-[1px] ">
            {addOnsService.map((item) => {
              const pick =
                state.addOns?.filter((ons) => ons === item).length > 0;
              return (
                <div
                  className={`border flex gap-x-3 items-center transition-all border-light-gray rounded-[10px] pr-6 pl-[11px] pt-4 pb-5 hover:border-purplish cursor-pointer ${
                    pick ? 'bg-alabaster border-purplish' : ''
                  } `}
                  key={item.name}
                >
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center px-3 rounded-full cursor-pointer"
                      htmlFor={`checkbox-${item.name}`}
                    >
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-[19px] w-[19px] cursor-pointer appearance-none rounded border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purplish checked:bg-purplish checked:before:bg-purplish hover:before:opacity-10"
                        id={`checkbox-${item.name}`}
                        checked={pick}
                        onChange={(e) => {
                          dispatch({
                            type: 'changed_addOns',
                            check: e.target.checked,
                            addOns: item,
                          });
                        }}
                      />
                      <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <CheckListIcon />
                      </div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h4 className="text-marine font-bold tracking-[-0.015em]">
                        {item.name}
                      </h4>
                      <p className="text-cool text-sm">{item.desc}</p>
                    </div>
                    {state.bill === 'Yearly' ? (
                      <p className="text-purplish text-sm font-medium leading-none pt-[5px]">
                        +${item.priceYear}/yr
                      </p>
                    ) : (
                      <p className="text-purplish text-sm font-medium leading-none pt-[5px]">
                        +${item.priceMonthly}/mo
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div className="my-[35px]">
            <h1 className=" text-[32px] text-marine leading-normal font-bold">
              Finishing up
            </h1>
            <h3 className="text-cool text-lg font-light tracking-[-0.045em]">
              Double-check everything looks OK before confirming
            </h3>
          </div>
          <div className="flex flex-col gap-[26px] ">
            <div className=" bg-alabaster rounded-[10px] px-6 py-5 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <div className=" border-b border-cool pb-[22px]">
                  <h4 className="text-marine font-bold tracking-[-0.015em] leading-tight pr-3">
                    {`${state.plan} (${state.bill})`}{' '}
                  </h4>
                  <button
                    onClick={() => setStep(2)}
                    className="underline underline-offset-2 text-cool text-sm hover:text-purplish cursor-pointer"
                  >
                    Change
                  </button>
                </div>
                <p className="text-marine font-bold tracking-[-0.015em] leading-tight pb-[22px]">
                  ${state.price}/{state.bill === 'Monthly' ? 'mo' : 'yr'}
                </p>
              </div>
              {state.addOns.length > 0 && (
                <>
                  {state.addOns?.map((item) => (
                    <div
                      className="flex justify-between w-full"
                      key={item.name}
                    >
                      <h5 className="text-cool text-sm tracking-[-0.015em]">
                        {item.name}
                      </h5>
                      {state.bill === 'Yearly' ? (
                        <p className="text-marine text-sm font-medium ">
                          +${item.priceYear}/yr
                        </p>
                      ) : (
                        <p className="text-marine text-sm font-medium ">
                          +${item.priceMonthly}/mo
                        </p>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className=" px-6 flex justify-between items-center">
              <h5 className="text-cool text-sm">
                Total {state.bill === 'Monthly' ? '(per month)' : '(per year)'}
              </h5>
              {state.bill === 'Monthly' ? (
                <p className="text-purplish text-xl font-bold ">
                  +${state.total}/mo
                </p>
              ) : (
                <p className="text-purplish text-xl font-bold ">
                  +${state.total}/yr
                </p>
              )}
            </div>
          </div>
        </>
      )}

      <div
        className={`bg-white md:bg-transparent p-4 md:p-0 fixed md:absolute w-full flex items-center right-0 md:mb-4 bottom-0 ${
          step !== 1 ? 'justify-between' : 'justify-end'
        }`}
      >
        {step !== 1 && (
          <button
            className="text-cool text-sm md:text-base hover:text-marine font-medium py-[10px] md:py-3 transition-all ease-in-out delay-150 duration-300"
            onClick={() => setStep(step - 1)}
          >
            Go Back
          </button>
        )}
        {step !== 4 && (
          <div className="md:absolute md:right-0 md:bottom-0 ">
            <button
              className="relative bg-marine group text-white py-[10px] md:py-3 px-[17px] md:px-6 text-sm md:text-base font-medium rounded-md md:rounded-lg"
              onClick={() => setStep(step + 1)}
            >
              Next Step
              <span className=" absolute top-0 left-0 w-full h-full rounded-md md:rounded-lg group-hover:bg-alabaster/10" />
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="absolute right-0 bottom-0">
            <button className="relative bg-purplish text-white py-3 px-8 text-base font-medium rounded-lg">
              Confirm
              <span className=" absolute top-0 left-0 w-full h-full rounded-lg hover:bg-alabaster/10" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
