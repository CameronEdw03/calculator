import React, { useState } from 'react';

function Home() {
     const [input, setInput ] = useState('')

     const handleNumberClick = (number) => {
         setInput(prev => prev + number);
     }
     
     const handleClear = () => {
        setInput('')
     }

     const handlePercentage = () => {
        if(input) {
            const percentageValue = parseFloat(input) / 100
            setInput(percentageValue.toString());
        } 
        setInput(percentageValue.toString());
     }
     const handleDecimal = () => {
        setInput(prev => prev + '.')
     }
    
    const handleMultiplication = () => {
        setInput(prev => prev + 'x')
    }
   
    const handleDivision = () => {
        setInput(prev => prev + '/')
    }

    const handleAddition = () => {
        setInput(prev => prev + '+')
    }

    const handleSubtraction = () => {
        setInput(prev => prev + '-')
    }

    const handleEqual = () => {
        try {
           const result = eval(input.replace(/x/g, '*').replace(/-/g, '-').replace(/\//g, '/').replace(/\+/g, '+').replace(/%/g, '/100').replace(/,/g, '.'));
              setInput(result.toString());
            return result;
        } catch (error) {
            console.error("Error evaluating expression:", error);
            setInput('Error');
            return null;
        }
    }

    return (
        <div className='flex items-center justify-center h-screen bg-stone-900'>
            <div className='bg-stone-800 rounded-lg shadow-lg h-125 w-100 p-6 flex flex-col items-center justify-start'>
                
                <div className='w-full mb-4'>
                    <input 
                        type='text'
                        className='w-full h-12 bg-stone-900 text-white text-right rounded-md px-4'
                        placeholder='0'
                        readOnly
                        value={input}
                    />
                </div>

                
                <div className='grid grid-cols-4 gap-4'>
                    
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={handlePercentage}>
                        %
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={handleClear}>
                        CE
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={handleDivision}>
                        /
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={handleMultiplication}>
                        *
                    </button>

                   
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                     onClick={() => handleNumberClick('7')}>
                        7
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                        onClick={() => handleNumberClick('8')}>
                        8
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={() => handleNumberClick('9')}>
                        9
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={handleSubtraction}>
                        -
                    </button>

                    
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={() => handleNumberClick('4')}>
                        4
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={() => handleNumberClick('5')}>
                        5
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={() => handleNumberClick('6')}>
                        6
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={handleAddition}>
                        +
                    </button>

                    
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={() => handleNumberClick('1')}>
                        1
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={() => handleNumberClick('2')}>
                        2
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={() => handleNumberClick('3')}>
                        3
                    </button>
                    <button className='w-20 h-12 bg-green-500 transition-all duration-300 hover:bg-green-800 cursor-pointer text-white rounded-md'
                    onClick={handleEqual}>
                        =
                    </button>

                    
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={() => handleNumberClick('0')}>
                        0               
                    </button>
                    <button className='w-20 h-12 bg-stone-900 transition-all duration-300 hover:bg-stone-500 cursor-pointer text-white rounded-md'
                    onClick={handleDecimal}>
                        .
                    </button>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;