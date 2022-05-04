import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMainCatagory } from '../../redux/action';
import styles from "../../styles/HomePageMainCatagory.module.css"

export default function HomePageMainCatagory() {

    const [data, setData] = useState(null);

	const dispatch = useDispatch()

	const { mainCatagory } = useSelector(store => store)
	
	useEffect(() => {
		dispatch(fetchMainCatagory())
	}, []);

	useEffect(() => {
		setData(mainCatagory)
	}, [mainCatagory])

  return (
    <div className={styles.main}>
        { data ? (
            <div>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.url} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        ) : null}
    </div>
  )
}
