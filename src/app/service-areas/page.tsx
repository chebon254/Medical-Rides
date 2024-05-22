import React from 'react'
import Image from 'next/image'

function serviceAreas() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8  container">
            <div className="py-12 bg-white">
                <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Areas</h2>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Service Areas
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            We will be providing services to the following counties.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="mb-6">
                            <img src="/medride-colorado-service-area.jpg" alt="Placeholder Image" className="mx-auto" />
                        </div>
                    </div>
                    <div className="flex justify-center align-top">
                        <div className='grid grid-cols-3 gap-4 '>
                            <div className='m-16'>
                                <ul className="list-none">
                                    <li>Alamosa</li>
                                    <li>Archuleta</li>
                                    <li>Baca</li>
                                    <li>Bent</li>
                                    <li>Chaffee</li>
                                    <li>Cheyenne</li>
                                    <li>Crowley</li>
                                    <li>Custer</li>
                                    <li>Costilla</li>
                                    <li>Conejos</li>
                                    <li>Delta</li>
                                    <li>Eagle</li>
                                    <li>Elbert</li>
                                    <li>El Paso</li>
                                    <li>Fremont</li>
                                    <li>Garfield</li>
                                    <li>Gunnison</li>
                                    <li>Grand</li>
                                    <li>Hinsdale</li>
                                    <li>Huerfano</li>
                                    <li>Jackson</li>
                                </ul>
                            </div>
                            <div className='m-16'>
                                <ul className="list-none">
                                    <li>Kiowa</li>
                                    <li>Kit Carson</li>
                                    <li>Las Animas</li>
                                    <li>Lake</li>
                                    <li>Lincoln</li>
                                    <li>Mesa</li>
                                    <li>Mineral</li>
                                    <li>Moffat</li>
                                    <li>Montrose</li>
                                    <li>Otero</li>
                                    <li>Ouray</li>
                                    <li>Park</li>
                                    <li>Pitkin</li>
                                    <li>Prowers</li>
                                    <li>Pueblo</li>
                                    <li>Rio Blanco</li>
                                    <li>Rio Grande</li>
                                    <li>Routt</li>
                                    <li>Saguache</li>
                                    <li>Summit</li>
                                    <li>Teller</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default serviceAreas