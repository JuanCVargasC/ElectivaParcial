async function getDish() {
    try {
      const respuesta = await fetch('http://api-dishes.vercel.app/');
      if (!respuesta.ok) {
        throw new Error('ERROR API');
      }
      const dataDish = await respuesta.json();
      console.log(dataDish);
      console.log("scripget");

    } catch (error) {
      console.error('Error data:', error.message);
    }
  }
  
  getDish();

  document.getElementById('sendDish').addEventListener('click', () => {
    const URL = "http://api-dishes.vercel.app"

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: loadData()
    }).then(resp => resp.json())
        .then(resp => {
            if (resp.state) {
                alert('Okkk')
            } else {
                alert('Noooo')
            }
        })
        .catch(err => {
            alert(`Error ${err}`)
        })
})