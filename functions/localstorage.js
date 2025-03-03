export const getBills = () => {
    return JSON.parse(localStorage.getItem("bills")) || [];
}

export const saveBills = (bills) => {
    localStorage.setItem("bills", JSON.stringify(bills));
  };

export const AddPeopleToList = (people) => {
    localStorage.setItem('Peoples',JSON.stringify(people))
}