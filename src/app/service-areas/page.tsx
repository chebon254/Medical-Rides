import React from 'react'
import mapImage from '../../../public/medride-colorado-service-area.jpg';
import Image from 'next/image';

function serviceArea() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
                        Areas
                    </h6>
                    <h2 className="text-6xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
                        Service Areas
                    </h2>
                </div>
                <div className="flex flex-col items-center justify-center min-h-screen p-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <Image src={mapImage} alt="Colorado Map" layout="responsive" className="rounded" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between">
                            <ul className="list-none list-inside mb-4 md:mb-0 md:mr-8">
                                {[
                                    'Alamosa', 'Archuleta', 'Baca', 'Bent', 'Chaffee', 'Cheyenne', 'Crowley', 'Custer', 'Costilla',
                                    'Conejos', 'Delta', 'Eagle', 'Elbert', 'El Paso', 'Fremont', 'Garfield', 'Gunnison', 'Grand',
                                    'Hinsdale', 'Huerfano', 'Jackson'
                                ].map((county) => (
                                    <li key={county}>{county}</li>
                                ))}
                            </ul>
                            <ul className="list-none list-inside">
                                {[
                                    'Kiowa', 'Kit Carson', 'Las Animas', 'Lake', 'Lincoln', 'Mesa', 'Mineral', 'Moffat', 'Montrose',
                                    'Otero', 'Ouray', 'Park', 'Pitkin', 'Prowers', 'Pueblo', 'Rio Blanco', 'Rio Grande', 'Routt',
                                    'Saguache', 'Summit', 'Teller'
                                ].map((county) => (
                                    <li key={county}>{county}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default serviceArea