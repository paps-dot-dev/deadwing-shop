import { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'

function ProductModal({ data, closeModal, isOpen, handleClick }) {
  const [size, setSize] = useState(data.sizes[0])

  const selectSize = (e) => {
    setSize(e.target.value)
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    {data.name}
                  </Dialog.Title>
                  <div className='mt-2'>
                    <img src={data.image} />
                    <div className='flex justify-center items-center'>
                      <label className='font-light'>Size:</label>
                      <select
                        onChange={selectSize}
                        value={size}
                        className='border-2 rounded-md p-2 w-32 mx-2'>
                        {data.sizes.map((size) => (
                          <option value={size} key={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <p className='text-sm text-gray-500'>{data.subtitle}</p>
                    <p className='mt-4 text-gray-700 font-light'>
                      Product Description
                    </p>
                    <p className='text-sm text-gray-500'>{data.description}</p>
                    <p className='text-right'>{data.price}.00 USD</p>
                  </div>

                  <div className='mt-4 flex justify-between items-center'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Back to Products
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-gradient-to-br from-blue-700 to-indigo-500 text-white px-4 py-2 text-sm font-medium  hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={() => handleClick(size)}>
                      Add to Cart
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ProductModal
