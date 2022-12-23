import React from 'react';
import PropTypes from 'prop-types';

const ResponsiveTable = ({ type, array }) => {
  return (
    <>
      {type === 'bids' && (
        <>
          {array.map((el, i) => (
            <section
              key={i}
              className='text-gray-700 body-font tails-selected-element relative mt-2 w-full rounded bg-white px-8'
            >
              <div className='container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row'>
                <a
                  href='#_'
                  className='text-black relative z-10 flex w-auto select-none items-center text-2xl font-extrabold leading-none'
                >
                  {el.serviceRequestId}
                </a>

                <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                  <span className='block'>{el.title}</span>
                </div>
                <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                  <span className='block'>
                    {el.minBudget} - {el.maxBudget}
                  </span>
                </div>
                <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                  <span className='block'>{el.description}</span>
                </div>
                <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                  <span className='block'>Blog</span>
                </div>

                <div className='z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
                  <a
                    href='#'
                    className='text-gray-600 whitespace-no-wrap border-gray-200 hover:bg-gray-50 inline-flex items-center justify-center rounded-md border bg-white px-4 py-2 text-base font-medium leading-6 shadow-sm focus:shadow-none focus:outline-none'
                    data-rounded='rounded-md'
                  >
                    Sign in
                  </a>
                  <span className='inline-flex rounded-md shadow-sm'>
                    <a
                      href='#'
                      className='whitespace-no-wrap border-blue-700 hover:bg-blue-700 focus:ring-blue-500 inline-flex items-center justify-center rounded-md border bg-success px-4 py-2 text-base font-medium leading-6 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 lg:mx-1'
                      data-rounded='rounded-md'
                      data-primary='blue-600'
                    >
                      Bid Now
                    </a>
                  </span>
                </div>
              </div>
            </section>
          ))}
        </>
      )}
      {type === 'users' && (
        <div className='container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row'>
          <a
            href='#_'
            className='text-black relative z-10 flex w-auto select-none items-center text-2xl font-extrabold leading-none'
          >
            2234
          </a>

          <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
            <span className='block'>Blog</span>
          </div>
          <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
            <span className='block'>Blog</span>
          </div>
          <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
            <span className='block'>Blog</span>
          </div>
          <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
            <span className='block'>Blog</span>
          </div>

          <div className='z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
            <a
              href='#'
              className='text-gray-600 whitespace-no-wrap border-gray-200 hover:bg-gray-50 inline-flex items-center justify-center rounded-md border bg-white px-4 py-2 text-base font-medium leading-6 shadow-sm focus:shadow-none focus:outline-none'
              data-rounded='rounded-md'
            >
              Sign in
            </a>
            <span className='inline-flex rounded-md shadow-sm'>
              <a
                href='#'
                className='whitespace-no-wrap border-blue-700 hover:bg-blue-700 focus:ring-blue-500 inline-flex items-center justify-center rounded-md border bg-success px-4 py-2 text-base font-medium leading-6 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 lg:mx-1'
                data-rounded='rounded-md'
                data-primary='blue-600'
              >
                Bid Now
              </a>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

ResponsiveTable.propTypes = {
  type: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
};

export default ResponsiveTable;