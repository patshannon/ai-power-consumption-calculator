'use client';
import { ChevronDoubleUpIcon } from '@heroicons/react/16/solid';
import { ChangeEvent, FormEvent, useState } from 'react';
export default function Home() {
  const [input, setInput] = useState(0);
  const [response, setResponse] = useState<any>({});

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const resp = await calculateTotal(input);
    if (resp) {
      setResponse(resp);
    }
  };
  const calculateTotal = async (number: number) => {
    const wh = number * 2.9;
    const gCO2 = 481 * (wh / 1000);
    return {
      wh: wh,
      microwaveSeconds: number * 15,
      gCO2: gCO2,
    };
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(parseInt(e.target.value));
  };
  return (
    <div className="text-center">
      <h1 className="mx-auto text-4xl font-extrabold lg:text-6xl lg:max-w-2xl">AI Power Consumption Calculator</h1>
      <p className="mt-10 font-bold lg:text-lg">Examples of AI queries:</p>
      <ul className="text-sm lg:text-base">
        <li>ChatGPT</li>
        <li>Google Search</li>
        <li>Amazon</li>
        <li>Gemini</li>
      </ul>
      <form onSubmit={handleOnSubmit} className="mx-auto mt-10 flex flex-col max-w-60">
        <label htmlFor="number">Daily number of AI queries:</label>
        <input
          id="number"
          min={0}
          value={input}
          onChange={handleChange}
          name="number"
          className="mt-1 text-xl lg:text-2xl p-2 text-center bg-transparent border border-white rounded-full"
          type="number"
          placeholder="0"
        />
        <button className="transition hover:shadow-lg hover:shadow-green-500/25 mt-3 bg-green-700 pointer rounded-full text-xl p-2">Calculate</button>
      </form>
      {response.wh ? (
        <div>
        <div className="mt-10 p-5 text-3xl lg:text-4xl text-left font-extrabold rounded-lg shadow-2xl shadow-green-600 border border-green-500/15 w-max mx-auto">
          <div>
            {response.wh?.toFixed(2)} <span className="text-sm">Wh</span>
          </div>
          <div>
            {response?.gCO2?.toFixed(2)}{' '}
            <span className="text-sm">
              gCO<sub>2</sub>
            </span>
          </div>
          <div>
            {(((response?.gCO2?.toFixed(2) * 365) / 1000) * 2.204).toFixed(2)}{' '}
            <span className="text-sm">
              lbsCO<sub>2</sub> / year
            </span>
          </div>
        </div>
          <div className='mt-10 flex items-center justify-center'>
            <ChevronDoubleUpIcon className='w-6 h-6 text-red-500'/>
            <div className='text-xl font-bold'>{(((((9600.00+((((response?.gCO2 * 365) / 1000) * 2.204))-9600)/9600)))*100).toFixed(2)}% yearly</div>
          </div>
          <div className='text-sm'>*Based on 9600 <span className='text-xs'>lbsC0<sub>2</sub> / year</span> average</div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
