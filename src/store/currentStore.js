import { createSlice } from "@reduxjs/toolkit";

const CurrentStore = createSlice({
  name: "current",
  initialState: { cityName: "", value: [] },
  reducers: {
    currentData(state, action) {
      state.value = action.payload.value;
      state.cityName = action.payload.cityName;

      console.log(...state.value);
    },
  },
});

export const fetchData = (cityName) => {
  return async (dispatch) => {
    let cityId = "";
    const fetchCityId = async () => {
      const response = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=q83bD6Zwd4AxI2BxYK2MIG2UVBH3AnpF&q=${cityName}`
      );
      const data = await response.json();
      console.log(data);

      return (cityId = data[0].Key);
    };
    await fetchCityId();

    const fetchCurrentData = async () => {
      const response = await fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=q83bD6Zwd4AxI2BxYK2MIG2UVBH3AnpF`
      );

      const data = await response.json();
      console.log(data);
      dispatch(CurrentAction.currentData({ cityName: cityName, value: data }));
    };
    await fetchCurrentData();
  };
};

export const CurrentAction = CurrentStore.actions;

export default CurrentStore;
