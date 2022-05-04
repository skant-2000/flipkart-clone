import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux"
import { fetchPhone } from "../../redux/action";
import styles from "../../styles/HomePageCarousel.module.css"


export default function HomePagePhoneCarousel() {

    const [data, setData] = useState(null);

	const dispatch = useDispatch()

	const { phone } = useSelector(store => store)
	
	useEffect(() => {
		dispatch(fetchPhone())
	}, []);

	useEffect(() => {
		setData(phone)
	}, [phone])

	const breakPoints = [
		{ width: 100, itemsToShow: 2, itemsToScroll: 2 },
		{ width: 450, itemsToShow: 3, itemsToScroll: 3 },
		{ width: 700, itemsToShow: 4, itemsToScroll: 4 },
		{ width: 1000, itemsToShow: 5, itemsToScroll: 5 },
	];

  return (
    <>
			{data ? (
				<div className={styles.main}>
					<div>
						<div>Smart Phones </div>
						<button>VIEW ALL</button>
					</div>
					<Carousel breakPoints={breakPoints} style={{ width: "98%", margin: "auto" }} >
						{data.map((item) => {
							return (
								<div key={item.position} className={styles.carousels} >
									<div>
										<img src={item.image} alt="img" />
									</div>
									<div>
										<div>
											<p>{item.title}</p>
										</div>
										<div>
											<div>
												{ item.rating ? `${item.rating} ⭐` : null}
											</div>
											<div>
												{ item.ratings_total ? `(${item.ratings_total})` : null}
											</div>
										</div>
										<div>
											<div>
												{`${item.price.symbol} ${item.price.value}`}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</Carousel>
				</div>
			) : null}
		</>
  )
}
