//Note: can be used axios but am using react native fetch for this test

const getPilotsApiAsync = async () => {
    try {
      const response = await fetch(
        'https://swapi.dev/api/people'
      );
      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error(error);
    }
  };

export default getPilotsApiAsync;