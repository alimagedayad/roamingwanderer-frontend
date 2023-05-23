import React, {useEffect, useState} from "react";
import Loader from "react-loading";
import axios from "axios";
import capitalizeFirstLetter from "../../utils.js/capitalizeFirstLetter";
import axiosClient from "../../services/axiosClient";

import {format, parseISO} from "date-fns";
import {Modal} from 'flowbite-react'

const CustomModal = ({city}) => {
    const [loading, setLoading] = useState(true);
    const [cityData, setCityData] = useState({});
    const [open, setOpen] = useState(city == null ? false : true)
    
     useEffect(() => {
        setOpen(city == null ? false : true)
        setCityData({})
        setLoading(true)
        if (city !== null) {
            axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/trip/overview/${city.name}`).then((res) => {
                setLoading(false)
                setCityData(res.data)
            }
            ).catch((err) => {
                setLoading(false)
            })
        }

    }, [city])

    return (
    <div>               
        <Modal
            show={open} 
            dismissible={true}
            onClose={() => setOpen(false)}
        >
            <Modal.Header>
                {capitalizeFirstLetter(city?.name)}
            </Modal.Header >

            <Modal.Body>
                {loading ? <Loader className="col-md-6 flex items-center justify-center" type="spin" color="#000000" /> : <>
                <div className="row">

                    <div className="col-md-6 flex items-center justify-center">
                        <img src={cityData?.country?.flag} alt={cityData?.name} className="img-fluid" width="150px" />
                    </div>

                    <div class="text-2xl font-bold mb-4 text-center pt-2">Overview</div>

                    <div className="col-md-6">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            Coordinates: {cityData?.country?.geometry?.coordinates[0]}, {cityData?.country?.geometry?.coordinates[1]}
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            Currency: {cityData?.country?.currency?.name} ({cityData?.country?.currency?.code})
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            Exchange Rate:  1 USD = {cityData?.exchange_rate} ({cityData?.country?.currency?.code})
                        </p>
                    </div>


                    <div class="text-2xl font-bold mb-4 text-center pt-2">Weather</div>

                    {cityData?.weather?.map((day) => (<>
                            <div class="bg-white mb-2 shadow-lg rounded-lg p-6">
                                <div class="text-2xl font-bold mb-4">{format(parseISO(day.date), "MMMM dd")}</div>
                                <div class="flex items-center mb-4">
                                    <div class="text-3xl font-bold mr-4">{day.max}&deg;C</div>
                                    <div class="text-xl">{day.min}&deg;C</div>
                                </div>

                                <div class="flex justify-center mt-6">
                                    <div class="text-4xl">
                                        {day.min < 20 ? "🥶" : "🥵"}
                                    </div>
                                </div>

                            </div>
                            </> 
                    ))}

                    <div class="text-2xl font-bold mb-4 text-center">Popular Dishes</div>

                    {cityData?.food && cityData?.food?.map((day) => (<>
                            <div class="bg-white mb-2 shadow-lg rounded-lg p-6">
                                <img src={day.strMealThumb} alt={day.strMeal} className="img-fluid" />
                                <div class="text-2xl font-bold mb-4">{day.strMeal}</div>
                            </div>
                            </> 
                    ))}

                </div>
                </>}
            </Modal.Body>
        </Modal>
    </div>
)}

export default CustomModal;
