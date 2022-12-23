function data() {
  const getlogements = () => {
    return fetch("data.json", {
      type: "GET",
    }).then((res) => res.json());
  };

  return {
    getlogements,
  };
}

export default data();

