import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 mt-5 shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-start md:justify-between">
          <div className="">
            <div className="md:grid md:grid-cols-3 md:gap-x-8">
              <div className="mb-4">
                <h1 className="font-semibold text-white">Office Location:</h1>
                <p className="text-sm text-gray-400 ">
                  8346 Sprague Way
                  <br />
                  COLORADO SPRINGS, CO 80908
                </p>
                <p className="text-sm text-gray-400 ">
                  Phone Number: +1 (719) 233-0707
                </p>
                <p className="text-sm text-gray-400 ">
                  Email Address: info@peakelitemedride.com
                </p>
              </div>
              <div className="mb-8">
              <h1 className="font-semibold text-white">Office hours:</h1>
                <p className="text-sm text-gray-400 ">
                  Monday 24 hours
                  <br />
                  Tuesday 24 hours
                  <br />
                  Wednesday 24 hours
                  <br />
                  Thursday 24 hours
                  <br />
                  Friday 24 hours
                  <br />
                  Saturday 24 hours
                  <br />
                  Sunday 24 hours
                </p>
              </div>
              <div>
              <h1 className="text-sm font-semibold text-white">24 hours transportation:</h1>
                <p className="text-sm text-gray-400 ">
                  Peak Elite medride operates 24 hours a day providing timely transportation to your appointments. Having reliable and accessible transportation is our goal. If you have any specific question or need further information about our service, feel free to call or text our main office number: (719) 233-0707, or our satellite office numbers: (806) 787-6905 and (719) 306-7313.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;