import styles from "../../styles/Filters.module.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function valuetext(value) {
  return `${value}°C`;
}

export default function Filter() {

  const { searchedItem } = useSelector(store => store)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(Infinity)

  const [value, setValue] = useState([min, max]);

  useEffect(() => {
    let min = Infinity
    let max = 0
    if (searchedItem) {
      for ( let i = 0; i < searchedItem.length-1; i++ ) {
        if ( searchedItem[i].price.value ) {
          if ( +searchedItem[i].price.value < min ) {
            min = Number(searchedItem[i].price.value)
          }
          else if ( +searchedItem[i].price.value > max ) {
            max = Number(searchedItem[i].price.value)
          }
        }
      }
      setMin(min)
      setMax(max)
    }
  }, [searchedItem])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.main}>
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={min}
          max={max}
        />
      </Box>
      <div>
        <div>
          {value[0] ? `$${value[0]}` : `$${min}`}
        </div>
        <span style={{color: "grey"}}>to</span>
        <div>
          {value[1] !== Infinity ? `$${value[1]}` : `$${max}`}
        </div>
      </div>
    </div>
  )
}
