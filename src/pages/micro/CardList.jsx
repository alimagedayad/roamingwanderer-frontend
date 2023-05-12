import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import { differenceInDays } from "date-fns";

import ActivityIndicator from "../../components/CommonComponents/ActivityIndicator";
import CustomModal from "../../components/CommonComponents/Modal";
import Card from "../micro/Card";


const CardList = ({date, budget}) => {
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(true);

    const [batchCalc, setBatchCalc] = useState(false);
    const [days, setDays] = useState(null)
    const [city, setCity] = useState(null)

    useEffect(() => {
        if (date && budget && (date.startDate !== null && date.endDate !== null)) {
            const numbers_of_days = differenceInDays(new Date(date.endDate), new Date(date.startDate))
            const total_budget = parseInt(budget) / numbers_of_days
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/trip/countries?budget=${total_budget}`).then((res) => {
                setBatchCalc(true)
                setDays(numbers_of_days)
                setCities(res.data)
                setLoading(false)
              }).catch((err) => {
                console.log(err)
                setLoading(true)
              })
        }

        else if ((date != null && date.startDate != null && date.endDate != null) && (!budget || budget <= 0)) {
            const numbers_of_days = differenceInDays(new Date(date.endDate), new Date(date.startDate))
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/trip/countries`).then((res) => {
                setCities(res.data)
                setLoading(false)
                setBatchCalc(true)
                setDays(numbers_of_days)
              }).catch((err) => {
                console.log(err)
            })        
        }

        else if(budget) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/trip/countries?budget=${budget}`).then((res) => {
                setCities(res.data)
                setLoading(false)
                setBatchCalc(false)
              }).catch((err) => {
                console.log(err)
              })
        }

        else {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/trip/countries`).then((res) => {
                setCities(res.data)
                setLoading(false)
                setBatchCalc(false)
              }).catch((err) => {
                console.log(err)
              })
        }

    }, [date, budget])
    
    
    return (
        (loading && cities?.length < 0) ? <ActivityIndicator loading={loading} /> : <>

            <CustomModal
                city={city}
            />

            <CardContainer className="grid grid-cols-12">
                {cities.map((city, i) => ((
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                        <Card key={i} city={city} days={days} batch={batchCalc} setCity={setCity} />
                    </div>
                )))}
            </CardContainer>

            <div
                style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <ActivityIndicator loading={loading} />
            </div>
        </>)
}

const CardContainer = styled.div`
  // display: grid;
  grid-gap: 20px;
  margin: 0px 10px;
  margin-top: 20px;
`;

export default CardList