import {
  ADD_VEG_MAINCOURSE,
  ADD_VEG_STARTERS,
  ADD_NONVEG_MAINCOURSE,
  ADD_NONVEG_STARTERS,
  REMOVE_VEG_STARTERS,
  REMOVE_VEG_MAINCOURSE,
  REMOVE_NONVEG_STARTERS,
  REMOVE_NONVEG_MAINCOURSE,
} from "../types/Types";

export const addVegStarters = (code) => {
  return {
    type: ADD_VEG_STARTERS,
    payload: code,
  };
};

export const removeVegStarters = () => {
  return {
    type: REMOVE_VEG_STARTERS,
  };
};

export const addVegMainCourse = (code) => {
  return {
    type: ADD_VEG_MAINCOURSE,
    payload: code,
  };
};


export const removeVegMainCourse = () => {
  return {
    type: REMOVE_VEG_MAINCOURSE,
  };
};


export const addNonVegStarters = (code) => {
  return {
    type: ADD_NONVEG_STARTERS,
    payload: code,
  };
};


export const removeNonVegStarters = () => {
  return {
    type: REMOVE_NONVEG_STARTERS,
  };
};

export const addNonVegMainCourse = (code) => {
  return {
    type: ADD_NONVEG_MAINCOURSE,
    payload: code,
  };
};

export const removeNonVegMainCourse = () => {
  return {
    type: REMOVE_NONVEG_MAINCOURSE,
  };
};
