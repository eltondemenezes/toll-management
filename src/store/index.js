import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialTollFormState = {
  name: "",
  vehicle: "",
  lcv: "",
  truck: "",
  hvehicle: "",
};

const tollSlice = createSlice({
  name: "toll",
  initialState: initialTollFormState,
  reducers: {
    updateToll(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearToll(state) {
      state.name = "";
      state.vehicle = "";
      state.lcv = "";
      state.truck = "";
      state.hvehicle = "";
    },
  },
});

const initialEntryState = {
  toll: "",
  vehicletype: "",
  vehiclenumber: "",
  tariff: "",
}

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: initialEntryState,
  reducers: {
    updateVehicle(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearVehicle(state) {
      state.toll = "";
      state.vehicletype = "";
      state.vehiclenumber = "";
      state.tariff = "";
    },
  },
});


export default configureStore({
  reducer: { toll: tollSlice.reducer, vehicle: vehicleSlice.reducer },
});

export const tollActions = tollSlice.actions;
export const vehicleActions = vehicleSlice.actions;
