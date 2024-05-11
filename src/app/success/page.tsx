import React from 'react'

function paymentSuccess() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-lg text-center font-bold text-green-600 mb-4">Payment successful!!</h1>
            <div className="flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            </div>
            <div className="mb-2">
            <span className="font-bold">Payment type:</span> Net banking
            </div>
            <div className="mb-2">
            <span className="font-bold">Bank:</span> HDFC
            </div>
            <div className="mb-2">
            <span className="font-bold">Mobile:</span> 8897131444
            </div>
            <div className="mb-2">
            <span className="font-bold">Email:</span> sudheeereddy.ui@gmail.com
            </div>
            <div className="mb-4">
            <span className="font-bold">Amount paid:</span> 500.00
            </div>
            <div className="mb-4">
            <span className="font-bold">Transaction id:</span> 125478965698
            </div>
            <div className="flex justify-end space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                PRINT
            </button>
            <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                CLOSE
            </button>
            </div>
        </div>
    </div>
  )
}

export default paymentSuccess